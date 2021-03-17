import React,{useContext} from 'react'
import ThemeContext from '../context/theme_context'
import AppTheme from '../colors'

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    const [thememode,setThememode] = useContext(ThemeContext)
    return(
        <div style={{
            padding: '1rem',
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: 'center'
        }}> 
            <h1>Context API theme toggler</h1>
            <p>This a nice Paragraph</p>
            <button onClick={ () => (
                setThememode(thememode == 'light' ? 'dark' : 'light')
            ) } style={{
                backgroundColor: '#26ae60',
                pading: '10px 150px',
                fontSize: '20px',
                color: '#FFF',
                border: `${currentTheme.border}`>
            <span>
              { thememode == 'light' ? 'Turn Off' : 'Lights On'}
            </span>
            }
            }>Click Me</button>
        </div>
    )
} 
export default HeroSection