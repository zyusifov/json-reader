function InputBox({ inputValue, handleSourceValue }) {
    const changeValue = (sourceValue) => {
        handleSourceValue(sourceValue);
    }

    return (
        <div className="InputBox">
            <textarea
                className="working-box-input-query"
                value={inputValue}
                onChange={e => changeValue(e.target.value)}
            >
            </textarea>
        </div>
    );
}

export default InputBox;
