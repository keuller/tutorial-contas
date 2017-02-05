import { render } from 'inferno'
import './index.sass'

// habilita react-dev-tools
if (!process.env.NODE_ENV) {
    require('inferno-devtools')
}

const App = (props) => {
    return (
        <div>
            <section className="section">
                <div className="container content">
                    <p className="has-text-centered">
                        <h2>Template da aplicação.</h2>
                    </p>
                </div>
            </section>
        </div>
    )
}

render(<App />, document.querySelector('#app'))
