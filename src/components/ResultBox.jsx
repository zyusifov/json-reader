
function ResultBox({ inputValue }) {
    return (
        <div className="ResultBox">
            <div
                className="working-box-result-view"
                dangerouslySetInnerHTML={{ __html: inputValue }}
            ></div>
        </div>
    );
}

export default ResultBox;
