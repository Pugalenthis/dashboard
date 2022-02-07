export function Gamebox({ val, onplayerclick }) {
    const styles = {
        color: val === "x" ? "green" : "red",
    };
    // const [val,setval]=useState(null)
    return (
        <div>
            <div style={styles} onClick={() => onplayerclick()} className="colorbox">
                {val}
            </div>
        </div>
    );
    
}
