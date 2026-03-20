import useLocalStorage from "./useLocalStorage"
import './theme.css'
export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Hello World! <br /><br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veritatis quibusdam, libero nisi voluptas expedita, culpa suscipit, voluptatibus distinctio asperiores sint accusamus est optio! Ad quibusdam blanditiis, libero similique veritatis praesentium autem sapiente iure aspernatur quisquam? Atque quibusdam quod vel dolore magni molestiae optio enim assumenda, praesentium non dolor eligendi.</p>
            <button type="button" onClick={handleToggleTheme}>Change Theme</button>
        </div>

    </div>
}