import { gsap } from "gsap";

export function slideUpIn(el, done) {
    gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", onComplete: done }
    );
}

export function slideUpOut(el, done) {
    gsap.to(el, { opacity: 0, y: -10, duration: 0.4, ease: "power2.in", onComplete: done });
}
