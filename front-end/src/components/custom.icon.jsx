export const Home = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
        </svg>
    )
}

export const Network = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
        </svg>
    )
}

export const Job = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
        </svg>
    )
}

export const Messsage = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
        </svg>
    )
}

export const Notification = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
        </svg>
    )
}
export const Work = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
        </svg>
    )
}
export const Avatar = ({img}) => {
    return (
        <div style={{ height:"24px", width:"24px" }}>
            <img src={img} alt="" style={{height :"100%",width:"100%",borderRadius:"50%"}}/>
        </div>
    )
}
export const Learning = () => {
    return (
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z" fill="currentColor" fill-opacity=".25" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z" fill="currentColor" fill-opacity=".6" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z" fill="currentColor" />
        </svg>
    )
}
export const Discover = () => {
    return (
        <svg class="svgColor" width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="svgColor" d="M18.07 2.93A10 10 0 1 0 3.926 17.07 10 10 0 0 0 18.07 2.93ZM5.34 15.66A8 8 0 1 1 16.66 4.353 8 8 0 0 1 5.34 15.66ZM9 8l-3 7a7 7 0 1 1 9.9-9.9L9 8Zm1.12 2.88a1.24 1.24 0 1 1 1.76-1.747 1.24 1.24 0 0 1-1.76 1.747ZM15.95 15A7 7 0 0 1 6 15l7-3 2.95-6.95a7 7 0 0 1 0 9.95Z" fill="currentColor" />
        </svg>
    )
}
export const LogoLInkedIn = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="CurrentColor"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 56 14"
        >
            <g fill="#0A66C2" fillRule="evenodd" className="inbug">
                <path
                    fill="transparent"
                    d="M56 1.25v11.5c0 .69-.56 1.25-1.25 1.25h-11.5c-.69 0-1.25-.56-1.25-1.25V1.25C42 .56 42.56 0 43.25 0h11.5C55.44 0 56 .56 56 1.25"
                    className="bug-text-color"
                ></path>
                <path
                    d="M56 1.25v11.5c0 .69-.56 1.25-1.25 1.25h-11.5c-.69 0-1.25-.56-1.25-1.25V1.25C42 .56 42.56 0 43.25 0h11.5C55.44 0 56 .56 56 1.25zM47 5h1.85v1.016h.043c.366-.475 1.125-1.078 2.357-1.078 1.875 0 2.75.87 2.75 3.062v4h-2V8.75c0-1.437-.328-1.875-1.368-1.875C49.5 6.875 49 7.75 49 9v3h-2V5zm-3 7h2V5h-2v7zm2.335-9a1.335 1.335 0 11-2.67 0 1.335 1.335 0 012.67 0z"
                    className="background"
                ></path>
            </g>
            <g fill="#0A66C2" className="linkedin-text">
                <path d="M40 12h-1.893v-.9h-.03c-.23.418-.952.962-1.91.962C34.174 12.062 33 10.521 33 8.5s1.291-3.562 3.2-3.562c.771 0 1.487.394 1.77.76H38V2h2v10zm-3.525-5.25c-.958 0-1.6.74-1.6 1.75s.654 1.75 1.6 1.75c.947 0 1.65-.641 1.65-1.75 0-1.094-.692-1.75-1.65-1.75zM31.763 10.822c-.666.767-1.832 1.24-3.263 1.24-2.161 0-3.5-1.375-3.5-3.614 0-2.054 1.433-3.51 3.658-3.51C30.676 4.938 32 6.35 32 8.653c0 .193-.03.347-.03.347h-5.147l.012.149c.119.67.766 1.43 1.8 1.43 1.018 0 1.572-.422 1.837-.72l1.29.963zm-1.536-2.917c0-.842-.642-1.475-1.576-1.475-1.045 0-1.714.63-1.778 1.475h3.354z"></path>
                <path d="M18 2L20 2 20 7.882 22.546 5 25 5 21.9 8.199 24.889 12 22.546 12 20 8.515 20 12 18 12z"></path>
                <path d="M10 5h1.85v.906h.043c.39-.472 1.138-.968 2.247-.968 2.126 0 2.86 1.156 2.86 3.347V12h-2V8.73c0-.787-.179-1.98-1.341-1.98C12.482 6.75 12 7.844 12 8.73V12h-2V5zM7 12h2V5H7v7zM8 1.75c.659 0 1.25.591 1.25 1.25S8.659 4.25 8 4.25c-.66 0-1.25-.591-1.25-1.25S7.34 1.75 8 1.75z"></path>
                <path d="M0 2L2 2 2 10 6 10 6 12 0 12z"></path>
            </g>
        </svg>
    )
}
export const Premium = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" class="mercado-match" width="20" height="20" focusable="false">
            <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
            <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
        </svg>
    )
}
export const Photo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false" style={{}}>
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z" style={{}}></path>
        </svg>
    )
}
export const Video = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false" style={{}}>
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z" style={{}}></path>
        </svg>
    )
}
export const Event = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false" style={{}}>
            <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z" style={{}}></path>
        </svg>
    )
}
export const Article = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z" style={{}}></path>
</svg>
    )
}
export const EyeButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false" style={{}}>
            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z" style={{}}></path>
        </svg>
    )
}
export const Create = ({style}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false" style={style} id="createMessageIcon">
            <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z" style={{}}></path>
        </svg>
    )
}
export const Filter = ({style}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false" style={style}>
            <path d="M15 2v2H6.72a2 2 0 01-3.44 0H1V2h2.28a2 2 0 013.44 0H15zm-4 4a2 2 0 00-1.72 1H1v2h8.28a2 2 0 003.45 0H15V7h-2.28A2 2 0 0011 6zm-6 5a2 2 0 00-1.72 1H1v2h2.28a2 2 0 003.45 0H15v-2H6.72A2 2 0 005 11z" style={{}}></path>
        </svg>
    )
}
export const Archive = ({style}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false" style={style}>
            <path d="M15 3v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h3v2H3v1h2v1H3v6h10V6h-2V5h2V4h-2V2h3a1 1 0 011 1zM7 1v6H5l2.24 2.65a1 1 0 001.52 0L11 7H9V1H7z" style={style}></path>
        </svg> 
    )
}
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }

// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }export const Job = () => {
//     return (
        
//     )
// }export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }

// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }

// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }

// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }

// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }

// export const Job = () => {
//     return (
        
//     )
// }export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }

// export const Job = () => {
//     return (
        
//     )
// }
// export const Job = () => {
//     return (
        
//     )
// }