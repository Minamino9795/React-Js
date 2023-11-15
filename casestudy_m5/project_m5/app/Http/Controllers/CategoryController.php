<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // $this->authorize('viewAny', Category::class);

        $categories = Category::paginate(4);
        if (isset($request->search)) {
            $search = $request->search;
            $categories = Category::where('name', 'like', "%$search%")
                ->paginate();
        }

        return view('categories.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $this->authorize('create', Category::class);

        return view('categories.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $categories = new Category();
        $categories->name = $request->name;
        $categories->save();
        return redirect()->route('category.index')->with('successMessage', 'Thêm thành công');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

        $categories = Category::find($id);
        return view('categories.show', compact('categories'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $categories = Category::find($id);
        return view('categories.edit', compact('categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // $this->authorize('update', Category::class);

        $categories = Category::find($id);
        $categories->name = $request->name;
        $categories->save();
        return redirect()->route('category.index')->with('successMessage', 'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $categories = Category::destroy($id);

        return redirect()->route('category.index')->with('successMessage', 'Xóa thành công');
    }
}
