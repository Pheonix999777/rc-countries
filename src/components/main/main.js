import "./main.css"
import { Form } from "../form/form"
import { FnUl } from "../props/props"

export function Main() {
    return  <section class="dark">
            <div class="container">
                <Form />
                <FnUl />
            </div>
    </section>
}