export default function FilterPanner({filters, setFilters, uniqueOptions}){
    const handleChange = (type, value) => {
        const newValue = filters[type].includes(value)
    }

    return (
        <div>
            {["genere", "author", "publisher"].map(type => (
                <div key={type}>
                    <div>
                        <input type="checkbox" onChange={() => {handleChange(type, option)}}/>
                        {option}
                    </div>
                </div>
            ))}
        </div>
    )
}