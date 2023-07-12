import './banner.scss'

/* 
  Banner Component:
    This is the component that will be used to display the banner on the home page.

    TODO:
      * Add images to the banner
      ! Add props to the banner
      ? Make carousel
*/

export default function Banner() {
  return (
    <div className='banner-wrapper'>
      <div className='banner-content'> {/* Banner Content */}
        <div className='banner-title'>Title</div> {/* Banner Title */}
        <div className='banner-description'> {/* Banner Description */}
          Description
        </div>
      </div>
    </div>
  )
}