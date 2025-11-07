export default function SortDropDown({sortByOrder, setSortByOrder}){
    return (
        <>
            <select value={sortByOrder} onChange={(e) => {setSortByOrder(e.target.value)}}>
                <option value="">Sort by price</option>
                <option value="lowToHigh">Price: LOW TO HIGH</option>
                <option value="highToLow">Price: HIGH TO LOW</option>
            </select>
        </>
    )
}