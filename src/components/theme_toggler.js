import React ,{useContext} from 'react'
import ThemeContext from '../context/theme_context'

const ThemeToggler = () =>{
        const [thememode,setThememode] = useContext(ThemeContext)
        return(
            <div onClick = {() => (
                setThememode(thememode == 'light' ? 'dark' : 'light')
            ) }>
            <span>
              { thememode == 'light' ? 'Turn Off' : 'Lights On'}
            </span>
            </div>
        )
}
export default ThemeToggler