export default function Starts({ item }) {
    if (!item.length) return <p className="stats">
        <em>
            start adding items to your packing list
        </em>
    </p>;
    const numItems = item.length;
    const numPacked = item.filter(item => item.packed).length;
    const complete = Math.round((numPacked / numItems) * 100);
    return <footer className="stats">
        <em>
            {complete === 100 ? 'You have completed packing .✈' :
                `you have ${numItems} number of items and youn have packed ${numPacked} (${complete} % ) 👜`}

        </em>
    </footer>;
}
