import conf from "../../config";

export default function Footer(){
  return (
    <footer>
      <img src="/assets/logo.png" alt="Logo" />

      <div className="links">  
      
        {
          conf.SITE_CREDITS &&
          <a href="https://cineworlds.obinode.app/" target="_blank">🎨 by CineWorld+</a>
        }
      </div>

      <p className="disclaimer">&copy; {conf.SITE_TITLE}. We do not store any media.</p>
    </footer>
  )
}