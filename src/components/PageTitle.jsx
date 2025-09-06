import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle({ defaultTitle = "My Website" }) {
  const location = useLocation();

  useEffect(() => {
    // Remove leading "/" and capitalize first letter
    let page = location.pathname.substring(1) || "home";
    page = page.charAt(0).toUpperCase() + page.slice(1);

    document.title = `${page} | ${defaultTitle}`;
  }, [location, defaultTitle]);

  return null; // Component doesn’t render anything
}

export default PageTitle;