import "../style/profileImage.css";


export const ProfileImage = ({image,style,imageStyle,onlineStyle,status}) => {
    return (
        <div id="profileImageDiv" style={style}>
            <div id="profileImage" style={imageStyle}>
                {/* <img src={image} alt="" /> */}
            </div>
            {( status==="online") && <div id="online" style={onlineStyle}></div>}
        </div>
    )
}