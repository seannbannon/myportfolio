export default class Animations {
    static animations = new Animations();
        // (property) Animations.fadeInScreen: (screen_name: any) => void

        fadeInScreen = (screen_name) => {
            let screen = document.getElementById(screen_name);
            if(!screen_name || !screen)
            return;

            screen.style.opacity = "5";
            screen.style.transform = "translateY(1px)"
        }
}