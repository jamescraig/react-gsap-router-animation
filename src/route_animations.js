import { TweenLite, TweenMax } from 'gsap'
// This function is called when when the animation is complete.
// Calling callbacks at the end of animations is pretty normal.
// This fancy clearProps jazz is simply wiping off any remnant CSS.
const handleComplete = target => TweenLite.set(target, {
  clearProps: 'position, width, transform',
})
/**
 * Notice how the node comes in as a parameter. This is incredibly
 * important to understand because it means the only thing
 * this function needs to operate is a node. You could call this
 * function literally any time you have a node to give it.
 * What is a node? It is a DOM element.
 * ex: ref={(node) => {
 *        this.node = node 
 *        handleAnimation(node)
 *     }}
 * The key takeaway from this comment block is that GSAP
 * doesn't care when or where you call it. It only cares about
 * which DOM elements are animating and their before and after
 * CSS properties.
 */
export const handleEnterAnimation = (node) => {
  if (!node) return
  // Cancel existing animations
  TweenMax.killTweensOf(node)
  const { parentNode } = node
  const targetWidth = parentNode.clientWidth -
    (parseFloat(getComputedStyle(parentNode).paddingLeft) * 2)
  // Set element position
  TweenLite.set(node, {
    position: 'fixed',
    scale: 0,
    x: 0,
    y: 100,
    autoAlpha: 0,
    width: targetWidth,
  })
  // Animate element
  TweenLite.to(node, 0.5, {
    force3D: true,
    scale: 1,
    autoAlpha: 1,
    x: 0,
    y: 0,
    onComplete: handleComplete, // Fire this when animation finishes
    onCompleteParams: [node],
  })
}
export const handleExitAnimation = (node) => {
  if (!node) return
  // Cancel existing animations
  TweenMax.killTweensOf(node)
  const { parentNode } = node
  const targetWidth = parentNode.clientWidth -
    (parseFloat(getComputedStyle(parentNode).paddingLeft) * 2)
  // Set element position
  TweenLite.set(node, {
    position: 'fixed',
    x: 0,
    width: targetWidth,
  })
  // Animate element
  TweenLite.to(node, 0.5, {
    force3D: true,
    scale: 0.5,
    position: 'fixed',
    opacity: 0,
    x: -100,
    y: -100,
    // I put this in here to force you to consider it as a hook
    onComplete: () => console.log('Page exit complete.'),
  })
}