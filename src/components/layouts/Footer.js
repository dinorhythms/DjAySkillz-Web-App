import React from 'react'

export default function Footer() {
  return (
    <React.Fragment>
        <footer className="footer" data-background-color="black">
            <div className="container">
            
                <div className="copyright">
                    &copy;
                    <script>
                        document.write(new Date().getFullYear())
                    </script>, DJ AY SKILLZ. All rights reserved. &nbsp;| &nbsp;Site By Peculiar Digital.
                </div>
            </div>
        </footer>
    </React.Fragment>
  )
}
