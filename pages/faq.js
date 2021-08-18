import React, { PureComponent } from 'react'
import Link from "next/link"

class Faq extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
        <div className="menu-two">
          <Link href="/">
            <a>
              <div class="back-btn">
                <span class="mat">
                  <svg viewBox="0 0 448 512">
                    <path
                      fill="currentColor"
                      d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
          </Link>

          <div class="page-name">
            <span class="mycart">Faq</span>
          </div>
        </div>
            </>
        )
    }
}

export default Faq