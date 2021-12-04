import { Task } from "../types";


const SortTask = (a:Task, b:Task) => {
    if (a.progress === 'pendiente' && b.progress !== 'pendiente') {
        return -1;
    } else if (a.progress !== 'pendiente' && b.progress === 'pendiente') {
        return 1;
    } else if (a.progress === 'enproceso' && ((b.progress !== 'pendiente') && (b.progress !=='enproceso'))) {
        return -1;
    } else if (((a.progress !== 'pendiente') && (a.progress !=='enproceso')) && ((b.progress === 'pendiente') || (b.progress === 'enproceso'))) {
        return 1; 
    } else if (a.progress === 'finalizada' && ((b.progress !== 'pendiente') && (b.progress !== 'enproceso') && (b.progress !=='finalizada'))) {
        return -1;
    } else if (((a.progress !== 'pendiente') && (a.progress !=='enproceso') && (a.progress !=='finalizada')) && ((b.progress === 'pendiente') || (b.progress === 'enproceso') || (b.progress ==='finalizada'))) {
        return 1;//revisar la logica desde acá
    } else if (a.progress === 'postergada' && ((b.progress !== 'pendiente') && (b.progress !== 'enproceso') && (b.progress !=='finalizada') && (b.progress !== 'postergada'))) {
        return -1;
    } else if (a.progress === 'cancelada' && b.progress !== 'cancelada') {
     return 1
    }
    
    return 0;
    // if (a.progress === 'pendiente' && b.progress !== 'pendiente') {
    //     return -1;
    // } else if (a.progress !== 'pendiente' && b.progress === 'pendiente') {
    //     return 1;
    // } else if (a.progress === 'enproceso' && (b.progress !== 'pendiente' || 'enproceso')) {
    //     return -1;
    // } else if ((a.progress !== 'pendiente' || 'enproceso') && (b.progress === 'pendiente' || 'enproceso')) {
    //     return 1; //revisar la logica desde acá
    // } else if (a.progress === 'finalizada' && (b.progress !== 'pendiente'|| 'enproceso' ||'finalizada')) {
    //     return -1;
    // } else if ((a.progress !== 'pendiente' || 'enproceso' || 'finalizada') && (b.progress === 'pendiente' || 'enproceso' || 'finalizada')) {
    //     return 1;
    // } else if (a.progress === 'postergada' && (b.progress !== 'pendiente' || 'enproceso' || 'finalizada' || 'postergada')) {
    //     return -1;
    // } else if ((a.progress !== 'pendiente' || 'enproceso' || 'finalizada' || 'postergada') && (b.progress === 'pendiente' || 'enproceso' || 'finalizada' || 'postergada')) {
    //     return 1;
    // } else if (a.progress === 'cancelada' && b.progress !== 'cancelada') {
    //  return 1
    // } 
    // else if (a.progress !== 'cancelada' && (b.progress === 'pendiente' || 'enproceso' || 'finalizada' || 'postergada')) {
    // return 1
    // }

    
}

export {SortTask}