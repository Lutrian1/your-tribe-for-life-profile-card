<script>
  export let section;
  let magnifier;
  let content;
  let scale = 5; // Zoom scale factor
  
  // Mouse position relative to the section
  let mouseX = 0;
  let mouseY = 0;
  let isHovering = false;
  let animationComplete = false; // To track if animation is complete

  // Handle mouse move inside the section
  function handleMouseMove(event) {
    if (!animationComplete) return; // Skip if animation isn't finished yet

    const { left, top, width, height } = section.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    mouseX = x;
    mouseY = y;

    // Update the magnifier position relative to the section
    magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;

    // Apply transform to the content, zooming it in
    content.style.transformOrigin = `${(x / width) * 100}% ${(y / height) * 100}%`; 
    content.style.transform = `scale(${scale})`;
  }

  // Trigger zoom when hovering
  function toggleHover(isHovered) {
    isHovering = isHovered;
    if (!isHovered) {
      content.style.transform = `scale(1)`; // Reset zoom when hover ends
    } else {
      animationComplete = false; // Reset before hover
    }
  }

  // Handle animation end to trigger zoom
  function onAnimationEnd() {
    animationComplete = true; // Enable zoom after animation finishes
  }
</script>

<div
  bind:this={section}
  class="zoom-section"
  on:mouseenter={() => toggleHover(true)}
  on:mouseleave={() => toggleHover(false)}
  on:mousemove={handleMouseMove}
  on:animationend={onAnimationEnd}
>
  <!-- Magnifier Element -->
  <div class="magnifier" bind:this={magnifier}></div>

  <!-- Content of the section (will be zoomed) -->
  <div class="content" bind:this={content}>
    <slot></slot> <!-- Slot for dynamically inserted content -->
  </div>
</div>

<style>
@media (min-width: 920px) {

  .zoom-section:hover {
    /* Dynamically calculate a full circle on hover */
    animation: borderAnimation 0.5s ease-in-out; /* Pulse animation once */
    z-index: 100;
  }

  .content {
    transition: transform 0.2s ease;
    will-change: transform; /* Improves performance during zoom */
  }

  @keyframes borderAnimation {

			0% {
				box-shadow:  0 0 0 150px gold;
			}
			100% {
				box-shadow:  0 0 0 0 gold;
			}
		}
		
}

</style>
