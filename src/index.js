import LearnVueButton from "./components/LearnVueButton.vue";
import Input from "./components/Input.vue";

export default {
    install: (app,options)=> {
        app.component("LearnVueButton", LearnVueButton).component("Input",Input)
    } 
}
