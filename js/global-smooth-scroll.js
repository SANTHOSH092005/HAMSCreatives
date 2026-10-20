// /**
//  * Global ScrollSmoother Initializer
//  * Auto-activates on any page containing #smooth-wrapper and #smooth-content
//  */
// document.addEventListener("DOMContentLoaded", function () {
//     if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined" && typeof ScrollSmoother !== "undefined") {
//         gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//         // Prevent duplicate instances if already initialized
//         if (!ScrollSmoother.get()) {
//             window.smoother = ScrollSmoother.create({
//                 wrapper: "#smooth-wrapper",
//                 content: "#smooth-content",
//                 smooth: 1.3,         // Smoothness duration in seconds (1.0 to 1.5 is standard)
//                 effects: true,       // Enables data-speed & data-lag parallax attributes
//                 smoothTouch: 0.1,    // Light smoothing on mobile touch screens
//                 normalizeScroll: true // Prevents address bar jump issues on mobile browsers
//             });
//         }
//     } else {
//         console.warn("ScrollSmoother dependencies (gsap, ScrollTrigger, ScrollSmoother) missing.");
//     }
// });