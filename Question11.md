# Convert context into redux

I opted to convert context to redux. I ended up with the following slices:

### authSlice

- Holds the userData held in localStorage
- I originally read directly from storage instead of managing through state, but it caused bugs where my components would not update as expected.
- This makes sense, because react did not know it had to re-render the components, since there was no state that had changed
- I still store auth data in localStorage and kept that logic in the actions/loaders. I just pass those functions the dispatch call to update the state value.

### cartSlice

- State only holds the items.
- All other values could be derived from the items list, so I built a custom hook to do so.
- Reducers update list

### productSlice

- Product context implemented for the midterm
- Used custom useProduct hook to handle filtering of the items stored in the slice
