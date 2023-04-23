

function Footer() {

    const footeryear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-promary-content footer-center">
         <div>
            <svg>

            </svg>
            <p>
                Copyrights &copy; {footeryear}

            </p>
      
      </div>

    </footer>
   
  )
}

export default Footer
