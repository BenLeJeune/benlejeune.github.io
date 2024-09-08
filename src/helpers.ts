export const scroll_callback = (id:string) => {

    return () => {
        const scroll_el = document.getElementById('ScrollableContainer')
        const target_el = document.getElementById(id)
        if (!scroll_el || !target_el) {
            console.log("Couldn't find scroll container or target...")
            return
        }
        const dest = target_el.getBoundingClientRect().y
        console.log(dest)
        scroll_el.scrollTo({
            top: scroll_el.scrollTop + dest - 180,
            left: 0,
            behavior: 'smooth'
        })
        console.log("Scrolled to " + id)
    }
}