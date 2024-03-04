import s from './groupblock.module.css'
const GroupBlock = () => {
    return (
        <div className={s.group}>
            <div className={s.backgroundGroup}></div>
            <div style={{ padding: "0px 10px 5px" }}>
                <h3 style={{ margin: "8px 0px", fontSize: "26px" }}>One Piece</h3>
                <span style={{ display: "block", fontSize: "18px" }}>157 тыс. участников</span>
                <span style={{ display: "block", fontSize: "18px" }}>35+ публикаций в день</span>
            </div>
        </div>
    );
}

export default GroupBlock;