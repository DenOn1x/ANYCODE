import { gsap } from "gsap";

export function slideUpIn(el, done) {
    gsap.fromTo(
        el,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.5, ease: 'power2.out', onComplete: done }
    );
}

export function slideUpOut(el, done) {
    gsap.to(el, { y: '-10%', opacity: 0, duration: 1, ease: 'power2.in', onComplete: done });
}
