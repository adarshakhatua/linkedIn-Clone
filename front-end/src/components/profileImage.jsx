import "../style/profileImage.css";


export const ProfileImage = ({image,style}) => {
    return (
        <div id="profileImageDiv" style={style}>
            <img src={image} alt="" />
        </div>
    )
}