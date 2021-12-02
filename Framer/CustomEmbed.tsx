export default function CustomEmbed(props) {
    // CSS can be pasted at the bottom of the file
    // HTML gooes inside first <div>
    return (
        <div className="cssClassName">
            <style>{css}</style>
            {/* Your HTML can start on line 8 */}
            
        </div>
    )
}

const css = `
    .cssClassName {
        background: red;
        width: 100px;
        height: 100px;
    }
`
