import cIcon from './assets/technos_icon/c.svg';
import cssIcon from './assets/technos_icon/css.svg';
import godotIcon from './assets/technos_icon/godotengine.svg';
import htmlIcon from './assets/technos_icon/html5.svg';
import javaIcon from './assets/technos_icon/java.svg';
import jsIcon from './assets/technos_icon/javascript.svg';
import pythonIcon from './assets/technos_icon/python.svg';
import sqliteIcon from './assets/technos_icon/sqlite.svg';
import unityIcon from './assets/technos_icon/unity.svg';
import vueIcon from './assets/technos_icon/vue.svg';
import openGLIcon from './assets/technos_icon/opengl.svg';
import reactIcon from './assets/technos_icon/react.svg';
import androidStudioIcon from './assets/technos_icon/androidstudio.svg';
import ionicIcon from './assets/technos_icon/ionic.svg';

const icon_tab = {
    "C": cIcon,
    "CSS": cssIcon,
    "Godot": godotIcon,
    "HTML": htmlIcon,
    "Java": javaIcon,
    "JavaScript": jsIcon,
    "Python": pythonIcon,
    "SQLite": sqliteIcon,
    "Unity": unityIcon,
    "Vue.js": vueIcon,
    "OpenGL": openGLIcon,
    "React": reactIcon,
    "Android Studio": androidStudioIcon,
    "Ionic": ionicIcon
};

export function getTechnoIcon(techno) {
    if(icon_tab[techno]) {
        return icon_tab[techno]
    }
    
    return null;
}