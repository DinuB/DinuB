var moreLarge = `
    <table>
        <tbody>
          <tr>
            <td align="center" valign="center" class="imageBox"> 
              <img src="src/img/responsive.png" alt=""> 
            </td>
            <td align="center" valign="center" class="textBox">
              <span class="more_box_title">
                UI / UX <br>
                Responsive <br>
              </span>
            </td>
            <td align="center" valign="center" class="imageBox">
              <img src="src/img/code_v2.png" alt=""> 
            </td>
          </tr>
          <tr>
            <td align="center" valign="center" class="textBox">
              <span class="more_box_title">
                < / CODE >
              </span>
            </td>
            <td align="center" valign="center" class="imageBox">
              <img src="src/img/security_v1.png" alt=""> 
            </td>
            <td align="center" valign="center" class="textBox">
              <span class="more_box_title">
                SECURITY
              </span>
            </td>
          </tr>
        </tbody>
      </table>
`;

var moreMedium = `
<div id="moreResponsive" class="moreBoxMobile">
    <div class="imageBox moreContentBox">
        <img src="src/img/responsive.png" alt="">
    </div>
    <div class="textBox moreContentBox">
        <span class="more_box_title">
            UI / UX <br>
            Responsive <br>
        </span>
    </div>
</div>

<div id="moreCode" class="moreBoxMobile">
    <div class="imageBox moreContentBox">
        <img src="src/img/code_v2.png" alt="">
    </div>
    <div class="textBox moreContentBox">
        <span class="more_box_title">
            < / CODE >
        </span>
    </div>
</div>

<div id="moreSecurity" class="moreBoxMobile">
    <div class="imageBox moreContentBox">
        <img src="src/img/security_v1.png" alt="">
    </div>
    <div class="textBox moreContentBox">
        <span class="more_box_title">
            SECURITY
        </span>
    </div>
</div>
`;

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("moreBox").innerHTML = moreMedium; 
    } else {
        document.getElementById("moreBox").innerHTML = moreLarge;
    }
  };
  
  var x = window.matchMedia("(max-width: 920px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes  