import { render } from 'inferno'
import './index.sass'

// habilita react-dev-tools
if (!process.env.NODE_ENV) {
    require('inferno-devtools')
}

const App = (props) => {
    return (
        <div>
            <section class="section">
                <div class="container content">
                    <p class="has-text-centered">Template da aplicação.</p>
                </div>
            </section>
        </div>
    )
}

render(<App />, document.querySelector('#app'))
