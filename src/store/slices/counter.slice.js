import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Products from '../../pages/products/Products'

 export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/products');
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching products", error);
        throw error;
    }
})

export const fetchPost = createAsyncThunk("post/fetch", async (data,state) => {
    console.log("component data  received",data);
    const page = data.page;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching post", error);
        throw error;
    }
})

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 5,
        userName: 'Zeeshan',
        post:[],
        Products: [
            { id: 1, name: "Product 1", price: 100 },
            { id: 2, name: "Product 2", price: 200 },
            { id: 3, name: "Product 3", price: 300 },

        ]
    },
    reducers: {
        increment: (state) => {
            console.log(" increment action called")
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        setUserName: (state, action) => {
            console.log("Action called Ali",action.payload)
            state.userName = action.payload;
        },
        addProduct: (state, action) => {
            state.Products.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.entities.push(action.payload)
        })
         builder.addCase(fetchProducts.rejected, (state, action) => {
            console.error("Failed to fetch product",action.error);
        })
         .addCase(fetchPost.fulfilled, (state, action) => {
            console.log("post action", action);
            state.post= action.payload;
        })
         builder.addCase(fetchPost.rejected, (state, action) => {
            console.error("Failed to fetch post",action.error);
        })
    },
})
// Action creators are generated for each case reducer function
export const { increment, decrement, setUserName,addProduct } = counterSlice.actions;
