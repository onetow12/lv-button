import LearnVueButton from "./components/LearnVueButton.vue";
import InputTaras from "./components/InputTaras.vue";

export default {
    install: (app,options)=> {
        app.component("LearnVueButton", LearnVueButton).component("InputTaras",InputTaras)
    }
};

export {InputTaras} 