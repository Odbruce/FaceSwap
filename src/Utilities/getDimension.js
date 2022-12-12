
const getDimension = (result) => {
  return (
    JSON.parse(result, null, 2).outputs[0].data.regions.map(
        (item) => {
          const {
            id,
            region_info: {
              bounding_box: { top_row, bottom_row, right_col, left_col },
            },
          } = item;
          let tp,lt, ht, wt;
          tp = `${100 * top_row - 3}%`;
          lt = `${100 * left_col - 2}%`;
          ht = `${(bottom_row - top_row) * 100 + 5}%`;
          wt = `${(right_col - left_col) * 100 + 4}%`;
          console.log( id, tp, lt, wt, ht);
          return { id, tp, lt, wt, ht };
        }
      )
  )
}

export default getDimension