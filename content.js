window.addEventListener('load', event => {
	const observer = new MutationObserver(mutations => {
    	mutations.forEach(mutation => {
			if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].attributes.role.value === 'presentation') {
				mutation.addedNodes[0].remove() 
			}

			if (mutation.type === 'attributes' && document.body.style.overflow === 'hidden') {
				document.body.style.overflow = 'visible'
			}
		})    
	})
  
	observer.observe(document.body, {childList: true, attributes: true})
})
