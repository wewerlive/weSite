export default function Services() {
  const spin = (
    <svg
      width='293'
      height='272'
      viewBox='0 0 293 272'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='293'
        height='272'
        fill='url(#pattern0)'
      />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            //@ts-ignore
            xlink:href='#image0_192_12'
            transform='matrix(0.00694444 0 0 0.0074806 0 -0.0386029)'
          />
        </pattern>
        <image
          id='image0_192_12'
          width='144'
          height='144'
          //@ts-ignore
          xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dB1hT1/vH0+mv2tYOJbLcs2qrVWtr3buuahVb66q4Bw5sHXUg4gARcStuq1XrFlFQQESQkJDkZk8SpkDCcCug8v6f9yaBJCQhtP8QJfk+z3lKyQ3eJJ/nc95zzr05FIozzjjjjDPOOOOMM84444wzzjjjjDPOOOOMM84444wzzjhTa7J1q6TBlpD0sZu3pwWuPaCM8D0pF829IM+fel32aHKU9PmEWGnp+t2pz4iB2Y+K3VVFJR7q9BIPlazYXcUs9lAnlrirL5W4q0Kee6gWvHBXDytuVNAOWsrq2Pt1OWOLALy1Mkzeb9Uh5cG5l+TSMTRpSV+JGPqJxdBfJIYBQjEMFIhhIF8Mg3hi8DkrB/aQe1Dioa7UXrgXwCu3QgDXIihzK4RX7oXw0qMAXnoWQKln/osXnmphaeP8sBLPgiklnoXtnR/oG5o/T4hcVx5O3TPnsiJjOEv6qrdcDH1kYugrFUM/iRj66+DRA2dKlBRiJ2RDsachMAgKCYtHAbxAUJrkQ3FTNTxvpoJnzVXwrEUePG2ZB09a5sKTVpr2WNda5mY/bpW773HLvEHQB9619/vijIUcX5H9+aad6dtnhcvv9ZNKoJdCAr1TK8AxZ50fkyVw1icDnjZVVUDjWkTaBYEpQWCa6UDJhcetc+FRmxx42PYePGiXDfe/yIai9llQ1CELCnWto7Zp/598rH1WYVG7rKMP22aPcML0GmX9XsWIOZcVgoFCSVlPpQacXqkSMGsdYYV1/PYpIOerPBKcV1rTaKBRw/PmKtIsj1trYNGBUtgxE/K/zAT1Vxmg6pQOeZ3TIffrNMjtkgY52LoqDVsXzWN4DB6r6pwO6k4ZivyO6QPs/d45bIACb4UGZSyfHpmq7pkmge/TJKCDh7QOwmPBOuNvSyFhbDaUuueX1zKljTWm0YemqH22BhiERQsKQnGvmwKyvlFA5repkPmdHDK+k0N6D2wySPvesOHv8DE8Bhs+J6u7ArK6pr7M7qoYae/30rEC8PaqA4r1v9yWP+mRYQiOKesYw4PW8d+jgIJ2qgpwmuSTtsHaRWcahAYNk/d1OglMthYWBAChUPaUgqK3FFL7SEDeVwyyvmKQ9hOBtL+Z1k8Esn5i8lh8jqK3hPwbyu9lBZnfCj6z99vqEAkJyZjyy23pQwSnR7oZ6yA8RuDoCuXRyRKImpJFdlWmwMHuCbsmNI0+NOkITC8NLCQo/UUgHiAE0SABCAcLQDCED9wf+MAezoOUETxgjOQBfZS2jdT8jjWcB5wf+OSx+Bx8rnigkPxbsr7iRfZ+b2t1ji9La7fymFKKwJDWSdeA09Na6/DFMPuSHLK6qjU1TuN8cgRVDk6HLLKLyvs6De51U2qg6aGBRt5HQtoDP2zhIAHwh/IhZSQPEsZwIdaLA5G/EBA+kYCLk9lwbiobzkxjwWlvFpzSNvwZf4eP4TF4LD4nxotD/g2EjTuEf9He73GtjBfAO7+fVBwZIJKUmbaOpMI6UtPWwS4reKsSiptq5mtw+I01TrlxysHR2Aa7p9TeErK7IaEZLCDNgh/2zfEcuDKJgH+mseD4TBYcnMuEPQtSYPsiBgT7MiDwdzps+oMOG5bRIWC5puHPG/+gk4/hMaGLGLDbJwUOzGXCsZlMEq5Lk9jx9n6va11CQpR9JtyS3/8uU886adWzznCmGK5Py4YytyKyQMY5GyyOscYp+DKTHBHpjJPWU0Z2UdilYPeCXVLiaC5E/UzAhSls+GsGC/bPS4HQxQzY/Dsd/FYmw4o1NPBdRwOfgCSYu+kuzAy8C9O33IVpwYnwm7bhz95bNI/N2XQXfDYkga8/DZavocHalckkcCGL6Ofs/X7XqviFKQ/1k5i3TqXhuQnreCVIgD8gl6x1SvSsg3MyOPTGGqfcOHrgYK1ya5zGNCens2Df/BTY6ssA/xXJsHytBhaEYXJIIozfkQCj99yB4fvvwOAD8TDgUDz0PXIbeh+9Db2OaRr+jL/rf/g2DD4YD8P2x8OPe+6A184EmBSSCDOC7sL8gCQfe7/ntSJBh/I/WnAuVVjJOgiPETh9zViHnFG+IYXMb9SaLquZipwRRutggYzdFRbHOKzGkRDWNzpwsKZB2xydxYQdixhkF7RsLQ3mb0yCqcGJ5Ic+fN8dEpTvj9+Grn/HQcd/bkHb87HQ4lIsNL0SA57hMeAeEQNuEdFkw589r8ZAkysx5DFtzseSz+lyKg56/BUH/Q7HvRq8J97T3u/9G58Nu9K//jlR9vg7a62D8BhZZzBXDIvOyOFBW1xy0IywcMYYax0ckuusg8NnHE1hjYNdVdxYDlngHpnNhG2LGWT3tNg/CaYH3SUtg9ZAkyAwX5yLhWaXY8D1WjRQI29qWtQNbYsC6g0zDR/THad9XqPr0QhdhL3f+zc+oZszpvzAkb3UWccAniqsow/PysOpUNJEW++00OuyyFpHARk66/QXkcXx3dFcuPorQRbEWNwiOIsCkmDq1kQYs1tjmm4n46DduVjSLNTrWmgQAoTiZiRQb14HajS2a0CN0bUIo6b9PR6Dx+Jz8LlRkY/dIiPb2Pv9f6MTsDdjRT+JtMxq6xgtgCI4gzli+PNQKpQ01sDzVAtPQUfsstLJLgtrHRySo3U4w3jkMBpHQDiKwq5qiX8SWfRiTYM1S+fTt6DFJX1o0CSR4HLzepFL9DUlNSZCQY3FFq6g3rqC/82h3rpSSo27AmbbrXBtuwrU2Ii8htHhPe39/r/R2bwjbX2fVBPWsWIBVAfPEITnsGl4cNkhqzt2WTKyy8JaJ3kUj7QO1jk4rMaRFBbFY3clkIVu59O3njS7FB3vcv3GLpeoqMXUGzdGUiMj2zeOiPjUmtf0afTZ+g3uXGxNTbjU1yX+wmxq/MVt1PiLkS53Loqpdy7muNy+RHeJv7jaLfri57Z/h2txAvYod/VKlVa5FGFqAVRnnSGECFYdSIXSxoWG8HyZSS5e6uodLJSxy8K5HCyScWSF1lkYkAQTtyUWDd0f/0+3E3Ezml2J+ZJy9uw79n5vnKkioZvSt/ZRSKu9AKpvnaGECJaekENJE03B/EzfPDp4eknJegeXD+LGabqsnQtTYPWftMzZmxMDR+9O6NnHL+6NukZndRC71apgzuXVQdwnawI5Ras3c86u3kiM9/MTfEhxhIQGZi3sL6n+Aqi+dYayRTA9XAoPWqvJKwFxglC/20J4FHrwYL1zYjrr2dbF9BMr/JIG+vnB25Q3MCuD2V+s2sJ9sDqIC2sCubB2Mxf8NnHBbyMX/AI4z/wDOJfWrycmBQYy61NqYwJDs34aLKi4ZseaBVBj6yA8P8eJIbNrHrzyKCTXtHCojqOtPF3NowfPTS9O/onpzMBti5mulDc8q4K4p9cgPJu5sFYLzroNHPAP4MD69RxY78+BgHUc2LCWKNmwhnNtw2qO96YV9NpRax3YkN1pBFP60mrrIDzl1hGT4PzAEsFomgg4g3LIRVGcYcarA3GeB4fqeH2OruYRDOHnRY/j+ITNYtal1IL4+THrrg7kPtW3jj48JDh+CA8HNq7hwKbVHNi8igOBKzkvAldyogOXEbM3ruRRKW9iLnuLP5oWKX9SnQVQnXV0XRbCM4wpguhfs6DMVVs0t9TMMKs7ZUB2N81QXdpP9EwwWLAxcZT4I0otyprNnLEV1uGS4PjrW8ePAxvXcmCTITwQtIIDW5YTsGUZAVv+IF4GLyVub/Vl+YQsIdwpb0p+PyHnW20dXmXr/MAUwbAUEWzfpISX7gXkEsWz5pqiGZcncIYZlyZkfcWXBAMFjSm1MGs3cU9Xsg7CY8o6fxrCE7yMgK1/ELD1dwJCfAnYtoSA0MUEhC4ihDt8iHXbF7JbUV7XrDmg3GrtAqg56wxPEcHsi1J42FJzFSFekvGotabuIYvm7vL7qb3Fsyi1NH5+af/zC+A8MmcdY3j0rROsA2cpAdv04Nm+iIAdCwnY6UPArgUE7JrHZu6ew16xb/ZrBNOOkKxvh3DFZdYsgJLwmLDOcIYIxiSKQNJLU/dg1/VE23XhqnpWt9Qb6b1Eb3yBbCl+67mjDKxDFsqG4Gy2ZB0tPDpwti8kYIcPATsRnPls2D2PDXvmsmHPHDbsnc2GfbPY3LBZ7BW759lxaiCuD7w7M1xeZM0CqDnrIDwj6CK4ODuDvPidHHVph+zqLzPKcroqN4MX1PqJv3X+xPEqrYPwVMM65fAYggP7ZrJh/ww2hE1nwwFvdoLdpjw27FCctnYpwpR1EJyRySJYvV9O3uiHd4LirTZ4aUZRh6znqs7KyRQHiJ+f4P3164iicniqsI4xPKFLzFvHGJ79M9kQhvB4s+HANDYc/I0NYb+xu9X4i15/WPnVD4S4rKoFUEvWQXjG3RZB1td58MI9v7xwftD23v28jmnfUhwkAX6coRats6KydUKqss68CnD2VrYOHNTCc2gqC47YA6D551JTrVmKGGrGOiNpIhiVJIIzPunkDX86+zxqnaMqap/1FcWBErCWOEgOz6trncXWW6ccnnJw2HB4CgsOTWberfEubOuWtN8GiCwvgFqyziiaCH68K4JZF6TkrcalFfa597BNtkNdO+PnF/fuxtWcfJPWWf4vrDPXvHX04Tk0hfnk8GRm4F+TOPVq/G7RmeGyRxatw7ZsHYRndKII4sdlkfYhZ5wbqx89aZXdieJg2biGO2BTNaxTDk85OETV1vHWs85kZvGhyaywsIl2WvYJClEEWVoA1VlnmCnrIDyJIhidIIJlR6Tl35Dx0r3gZXGzXIe8/XfTn8TeiklBomJ4bsE6pobne+dYts7BKeznhyazdtgNHJ19pl6XPjNrHZYhOCNMWGdMggjG3BECc6jmu3leuhXgvE+tnSC0FKw9AldwcixNCoYad1la6+yyxjrTsKtil6JxDkzkelDsnZ3r0/zNLYCas045PFpwfooXwrLDsvLv5gHXon8oDpqgldxelSYFq2Gdcngs1DrRg8SBlNcl88/LHpidFLRgHX14xt4WAm2UpvYpdVenwmcFH1McNFuWEdutso6PeeuYGp4fQnimsODwZBZEjBCoKa9Ddq5Pn1Rt6yRWgPPTbSGMjRPC/NMSsvYpdleVljbKr/n5h9ckQIG3gv8gMkwtgFplnVkV4OhPCuqG50cms+DIJBYc+5UNvG8Uw+39einLD8tlpobn1lpnXJwQxt0SwpUZmnkf/PJKigMneCmnu5ULoNZbZ6rGOgjO0YkIDwuOTWBB7EAxYdcXGzkr3XV0otjsUkQl6yQYWgfB8YoVwuTrIihqnQcl7upcaOm4XRcmeCkRTMKzpFoLoJqliCqso4Pn+AQW/PULC878RJTxOmZYdceJTbJ9o/JgpUnBalgH4RkfI4Tt6xUa+7ipplIcPCG+bMV/WAA1WIog4TGyzvFfWPDXzyw4MZ4FJ71YkNJDHmq3F7v4b1lBVZOCpHXuVLYOgjM+Wgg/3xQCY1g2FHuoWNj/Uxw4W5eyuliyjjULoDrrHDZjHRIeLxacHMeCv8eyIKa/IMcuL/avpZkdRtL14NED50crrPNztBB+uSGEmedF8KyJCoo9836kOHhCFxEb/+sCqK7LQnCOmrGODp5TPzHh7CgWpHdJr/lJxF3+ysOWrFMOjxnrIDwTooSwb7UCij3UhKPbB7Pdhy2xxjr7ZrBjTk7gllpjHQN4ysFhwakxTDg9mglnfmQC4zvRTkpNZ3VYaiZZKFuwzlhT1kF4ooQwIVIIv14XQuLoTCjxUE2jOHi2LWa6VrUAum866/Z+b1ZvPD56iCTcuFA+Osm0dU4YWef0GCac0cLzzygm3OktVNboi5X5QJ1fb4jKTC1FlHdZFqzzKwmPAKaEC6GwdV4ReGR+QHHwhM1i1t85nyg1bR1W4t4ZzP76xyf1kbc8NskK63hpwPnbyDoIztmRTDg7ggkRg9ivgFKDl24cXaacqb8AapV1blRYZ+I1AUyKEIDfDikO3XfX2Im/5tk1lx1gtABKC/MmBps7PmKEQHlUB081rYPwnBvOhPPDmHD+ByYIO0iH1dgLDQ1IDTdpnTgNOF4WrKODZ/JVAZxcpIRSN1WPGjvxNyB7ZrL77JvJWhY2k92nqmMT+kh/N2udcZato4Pnwg9MuDiUCcxu0jM1d6H3bnlGVdYxgEfPOpOuCmByuACmXBFA/JiMAmfx/O+T+W3mB6e82GWWrGMMz7kRFda5MJQJF4cw4dJgJiR+J6i5OmjeGckLA+vcMm2dCSasM0ULz9RLAlB2yf67xk66lub6UH6OgXUQHiNw/jFjHQ08KXB5UArE9iSKa+SE435Oazr2lhXWidRYZ6KRdaZeFsBvlwSw4IQQF07H1shJ1+Ik9JGctMY6JDxG1kFwLg9MgSsDUiCiXwo8bJtt+y9jOL44bU65dWKts44BPBcFMO2CADZukcJTj4I35x7t1zSMXvIe5fBUYZ0LRta5MjAFwvunQHi/FLjaNwWkX6ROsPkJH16edsCida6btg52WTp4vM8L4MAy+XObn6yD5OJw9iuz1hlmaJ1LetZBeK72S4GIvikQ0ScFuJ3Eu2x+snvWpsaT8FTHOpc04Ew7LwDvcwKYflYAZ+YoZTY/WQfJjYG8oqqtwyy3DgmP1joIzrXeKXC9VwoQnYU3bX6ym4NkcpPWuVa1daafE8CMs3yY8Q8fzs9UXrX5yTpI4vsIuZWs84Nl6xjDE9kzBVhfiYQ2P9nVe2UFv1hrnYuG1kFwZp7hw6zTfLjkrdxs85N1kCT3EJ+2yjr9K4NzvWcKRH6fAlE9UoDRmZdr85NdfkDyrNKkYBXWMYZn9t98iJygmGHzk3WQMLqKf9cfnlfHOlEIz3cpcONbBiR1Jh7b/GR9D0temJoUNLAOwmMEzszTfJh1SgPPnJN8iB+uHGLzk3WQsLuIJli0Tr8KcK4ZWefGdwy4+S0DbnZnQEJnotTmJ7vgpOhV+aTgFQFMsdY6OnhO8GHuX3yI+zHN4e42tVW4nSUDSHistE45PFpwor9hQEw3BiR0Yr2i2Dqz/hFWso4BPBasM1cLz7zjfIibmtbI5ifrIOF0Te1w2czw3Jx1jOGJ7YoAMctsf//7OWH1rXOyApz5x/gw/ygfwmYx37PpyTpQsttmf64DJ7wq63xXAU50NwbEdGVAbBcG3PqaAQlfMcHmJzv3lLCydc5ZZx2EZ8FRPvgc4UO0l6J2fiG2HZLWJO1/BtbpY711dPDEdWJAwpc1AJDPMVGZDhzvqqxzwtA6C47wwecwDxYe4sG1yYrWNj9ZB4mynbBJldb51rR14jpr4Ln9FQPudrBxF4ZZckhYZjApWA3r6OBZdIAH536T9rL5yTpIlO2U3cvhqY51OmvAif+SAXc6MoDejvXS5ie7bL/ohbF1jOGZ95dp6yw6qIFncRgPznsrnCvx/0/JaCMfZTwpWG6d7pato4MnoQMdWG3Zth/G+28TPyXhMQJnTlXWOagBZ8l+HizZx4ML05ULbX6yDhJZe9k8HTi6SUGL1umkASe+IwPudKBDQns6JH5BB3Zr4qnNTzZ4vVhtzjokPOXW4VeyDsLju48HS/fy4OQc+Umbn6yDRNJettV4UpCExwrr6OC5244OvFZc239jx97lMqkl6xh3WYsPVFjHdy8Plu7hwe+7eXB4ocy+N/bXooi/kN4wtk6MKet8Vdk6CM7dtnRIakMHcXOByOYne3hp6q1K1jlmnXV08Pyxiwc7l4sLbX6yDhLxFxKFQZelBeeWFdZJaksHWhs60FrRQdZUGGvzkz0xTxFmlXXCKlsHwfljJw+W7eBBwEa+7St+BwhQ4C1uB2GxRet8ad46tNZ0SG5FB3pLOiibivfY/ISvT1RONSiUtdZZaIV1lu3kwfLtXFgeyoUV27hwYarMYb403FZ53ji3GeMrLlkoV9s6CE9LOtBb0IHRnA6ZTcS2v0M4p2dOw8WHTFunHB4z1kF4VoRyYeU2LqwM4cI/3rLjNj/hWp4SD/Uv8V+zDKxTAU/V1tHBw2zGgHzPDLcaOemAQHGJOev4mrLOjgrrIDh/buXCqmAuhC0SZdfICdfiFDXNPmfKOncsWadVBTgpzeiQ0jQZ+I1Ztp8D0mXXSklGJevsqwDndwvW0cGzegsXNvjzypK8nPfF/9vg/ez3WijuV7JOBzokIjxVWAfhYTZNBlaTZJB68mruxsJTs+UXqrLOMrQOwmMEzqotXNDfefjKRNniqv69zauIvpv/JJYHrST61cwrfDPy3D2/n7SN1KJ1jOGpsA4dmE2SgdU4GdieyZDmITxXYyce45U2Rr9QNmedFSasY7zz8JG54lRz/86mVcTgTasJmv4eoEHLifU19kJf8xR7qMLYX3ANrYPwGIGTbMY6OngI92TIcZfU3BZaQIF31gUJXpm1Tqhl6+jvPLxxHQfivOQt9f9+wCpO/02rOImm9gDdsowoDfqjdm2q+28C1Nx6TzxyHia0Z1RtHYTHhHUIDw08fLcU/HqXdyk1mQNLpBnVsg7CY2bn4QuTpJfxbwb4cXtvWM25XdUeoNsXvqFbWP8/ptQtb05us7QK67Sr2jrG8HDckoHrmgxyV04apaZz4TfF3mUmCmUE588qrGO8B+hOX37pxtVErDV7gG71ZUsoDh6gwFvF7mqBpJXQsnWam7eODh5eo2TIchXtq/EXkTw0y2NNMM+sdQzgqWK/c1O78ZnbZCRkCbGR4uApdleNLfZQAb0tUzM8r4513DXgcBslA4+aDAIXOmS7Ke2zF9vBRZJc0johpq2z1oJ1rNkD1NTOwzt8OJ0pDj50L/ZQE6om6eatg/DogcM2YR0+NRn4LsmgcCFUdnsx4RNTd5m1ziaNddZVwzqm9gDV/7r/0EXsmv0yyNcwJR5qb/xSdklLAbkAaq11SHi01kFwBA2TQdggGbJdhLb/QgVzoQ/I/nx9AK+sKusYw/Nvdx7evoAIpjhwoMn9T0o81KqnnrnAaMUwPSlowTqG8NBA0oBe9qiRrKFdX9TfM6Q8A+tsNG2dDZasY+UeoKHzON0pDpwSd/VOtE9WE3mlpQiz1nE1BEfQIBmEn9NA9BkN0j7n2P7LFKrK3cGKEes28Kq2DsJT3T1A9b/ufx4ry5G/T7HUrbBHsYfqBQLEac6uNClorXVEWnjEn9AgpyF3HOV1yJH5onwSnupap1p7gLK2Uxy46yp1V6chPPmN062zTiPT1hF/SgPJJzRQfsYqorwuuTBZGmTWOqv/287Dun2x9s5hOuxtQNCo6JRuK1BhU47hUkSV1kmusA7CU58G0o9pcO8z4Z/2fl0UPz+Oi38AJ3C9P/HcknVMDc+rtfPwbHYubkRLccCUehQswA2IEZ5Cz4wqJwVxeG7OOjp4lPWZT+1aDvj5CRqtW0/s8F9PPDdrHb0F0P++8zBrL8UBU9xcPfylewFZ92ATNyYMFkB14HCrss4nGnBkH9FA9iENcurzN9nlBfn5MRv4BXAC/QM4T8lJwXUcCKiGdf7VHqC4J5a3413G8bR1TreSJvlPytwKSXjUHkqL1iHhsWAdhEf+IQ0yP2I/rHH7LA3m1Fu3gbt53XriiVWTghass62aOw/vm87O9/OLq9mVYjunqE1mx2fNVKqXHgVQ6p6Pm/EB35NpsABqyjrG8EjrV1hHXo8GqXVpoPqEX3OXbWCw9lgXQNAMliKqa51/swdo+c7DrIMUB4q6472vH7fKzS9pogZwLSLtk+0hNW+dhobgiE1YJ1ULT+bHRM1/M66/P6f7f10ANbsHqDU7D09lDaU4SPI7ZXa73/Ze4bPmeYD2eeGeD4897gHXnV4963xsaB3FBzRIq5tclvcJ70u7AFS+ALr23y2A/vudh1lFZ70E71McIHmd0iYUtc98+rhVLujbR+7GNW2dBtZZB+FR/o8GefWF9rkDBruwDWuJhH+7APpfdh4+OJVZ62/7gT5x797rqtyW/2UmPGx7D543V8Erj0Ky9sl1l1ltnXJ4jMBR1kmCe3VZhXgVqd1epJ+f4MONqzgrNq8iuNVdAP0vOw8fmsgaRanFUXyvaJzdTRGn6pQO97/Ihqctc6G0cT7gyOuhRxbwG9FNLkWYs44xPGl1kiCjDq0s53N+N8rrkqDV7FaBy9krgpYRTGsWQKu/87B2D9BJrEdHp8b9j1JLI+8j8crsLi/K/ToNCjtkwaPWOVDcVE3C89xDBRIqy+JShNS4y9KCo9BaJ+39JEh/LwlUHwq3Ul7XBC5nNt7qy14U4stODF3MflVpAdSCdcrhMb/zcK3cS0wyiNNM1kd8Lb2HHHK6KkHXdekK55fuBZDhKjS7AGqNdXTw5NbjsilvSkKWEO47fFg+2xcQt3csIF6a23lY3zrG8JTvPIx7nk9g1apvMIv7kfhEMEgQLO0rKk77XgbZ3RSg7pRh2HW5FkK+m9J669TTtw6tHJyMd5PgXh3WI1VDwYeUNzF418Tu2azZu2ezovfOYr+oZB3vCnAOmd7v/GnYCGZdSi3I2XmCD6O9OL78wbx8aT8RKHtKIesbBag6p0NR+yx43DoXSrRd1wP3TBA2pJtdALXGOghP1nv0l3mfijtSakN2zad/vteb5R3mzboW5s0qMWUdA3h+YcHxn5mnKG94NvqwG56YzloXPZ4oFAzhg7S/CJS9pJDVPRXydHVPmxx43kwz6nrmlgPiBowqlyJI69Q1bZ2Md5Ig893ksvwPuD9Sauve6AensCYdnMK6dGgy65np/c6Z9094Mexzl8B/jNfZs++s8EsaGrKEfurkdNbzGC8O6OBR9JJC5repgEVzQUdd3aOCl54FuHM1yBqyLC6AVmWdzHeSIPsdGuR/yJ9HcYTs9hJ8eGwic/yxX1lnj09gFR7/mfn4hBfzwrGfmS0ob1C6hDHf+2nH7X6zNyVuXfVn8r2dC1PgzKmzZY8AAAgSSURBVDQWxI2rgEepg6eLHjwt8uCFZz68cisAZUOiSuuUw2PKOm8nQdZbNMivJ7TPKrsz1QiT+V6LCzFfd/s7bu7Q/bfP/xqS8HBhQBIELKfDvvkpcGEKGxLGcEE4WAC6mqccHu2I62mLvPKiOc2FW+UCqP6koLF1srTwqOrytjk/x/8Q17jwBtT4S+tc4i+muMRfVLnEX5BQ4y9GUu9cDHWJvziHGn+hv2vc+bZ4XJV/zM/vbY+oqM9cYq5/6XLj+hiXqKil1Mgbe5tejr7b6VTss/6Hb8PYXQkwM/AurFhDg2BfBhydxYSrvxKQPIoHokECkPUVg7KnjKx59LutcngaFUJ6Q5511sEuSwtOuoF1kiD77SRQfcDb4ITnP4QaE9HPJeaqmnrrKlBvhWta3BVL7SX1Vnge9dYVBTU2XEGNjVBQYyIULtERmdSb1x9Rb0QCNSoKqJE3gXo9GlpcioHOp29B3yO3YfSeO/BbcCIs8ddYZ88CTZeF9Q5nGA/EA4Ug7yMBcqj+jQLyvk6vDI8rwsOtcgHUnHV08GS9TSsrrCfwdcLzH9Lo5s12LlGRT6g3I4F68zpQo7FdA2qMrkUYNe3v8Rg8Fp+Dz70RBdSoG+XQeIbHQLtzsdDtZBwMOBQPY3bfgalbE2FRQBL4rUyG0EUMOD6TRVrn7mhtl4XFcm8JZPSQw71umqE6jrZ0NU85PA24Vi2AYqFsyjqked6lv3zwscj223TX9jS9HH290fVozQePDSEgW5QGClMNH9Mdp32e67VoaHY5Br44Fwtd/46D3kdvw7D98TB+RwJMD7oLi/014GxbzIAjs5lwcTIb4sZygPsDn7SOpsvS1Ds4w6z+KoOc5yGH6s1VZMH8spEa0j5nW7UAatY6byVBznspj1R1+V/Z+71/4zN4T7xn/0NxZT3+ioMup+Kg4z+3oM35WGhxKRaaXIkBz6sx4B4RA24R0WTDn9EsTa/EkMe0PR9LPgeB+f74bdI0w/fdAa+dCTA1OBHmb0yCZWtpZFe1Y5GmzsEiOdaLA6zhmloHC2W0Di5NaLqsNHJ5AmeY8dKM4mYqcomipFEupH7GtGpSMP1909bBlleHEOZTnN+P9P+SBRvuLpwRdBcmhSSSH/qPe+6Q1hh8MB6w0MWaBU3S65im4c/4OwRl8IF4GL7/DlnToGUmhySSRbFPQBIsX0sD/xXJsNWXQY6sTk5nwZVJBNwapwdOfxGkamsdnXVwVV3XZT1tmUfOML9yL4QnjbJA/ind6gVQU9bJfptWll+Xv/P/551zhkzIYvqFTX/QYe3KZFi+hga+/jTw2ZAEczbdJWHw3nIXpgUnkkUvNvx5+hbNY3M3aWDxXUcjR1LYPW3+nQ6hixmwf14K/DWDRdom6mcCEkdzya7KAJyeGnDudVNCXud0cohOWqd1DjlBqLksowgKqQqQfpJs/VKECevkvs8szP1I6NC3ddsklyaxEnEEdGwmEw7MZcJunxSyuMVhdeDvdNj4Bx02LKOTXRA2/BmBw8fwmO2LGOQo6uBcJlkQ/zNNY5qb4znkXA57OI8sjskap58YUntXGAeL5DzsrrS1js46eEkGdlk4QXivoaBaC6CVCuW3aWXqD3jHgHLWfheD1ebwhvKuMEbyyA8bh9GRvxAQPpEgC9xzU9nk8Pq0NwtOaRv+jL/Dx/AYPBafgzUN/o2UkTzgD+WDcJAGGqxvcEiOM8npPfSMowOngwacJ61yyTWtF9qLwZ675oLyU3a1FkDJSUHDWie9qJ4drmF2pEj6inyxS8EPG7sXtAUuH3B+4JO1SsoIHtBH8oA+StMQNvwdmgW7JDwWn4PPFQ8Qkt0TjqZSddBobYPFMVnjdE4nC2SdcZ4gONhdNckna51XboVQ2EgJsk/o1VsANRxh3VfVFfxm7/fWIZL5reAz5feyAhw+40gIP3h5XzHZ3aA9EAiTrZ8GFDwWn6PoLSWH4Ng9ZXwnN4AGJwJxSF7YUVPjmAKnDK3jngdZDXjVXgDVLEUkQc77zEfqutw/HfkbSOyS7K6KkVldU19mdVeQHzwCgA2H1djtIBT6DX+Hj5GgaGHB63OwpkFgcNmBNI0WmqL2GmiwOCZrnGaaAlkHTql7PtxvlAbyTxn/YgE0CXLrsHPV9URVftm6MzZMfsf0AepOGQr84HFEhBDg4mUOtq5Kw9ZF8xgeg8fi0BsNg12TBpisctPooEHb4K02LzwLSGiwq8Jbbp6550AmWqeaC6DZ79DKVP8jeKo6nCFOMF6TQB9492Hb7BFF7bKOFLbPLMACt1DXOmqb9v/xMR0oD9ppYMEZY7w6EC8vxWUHNE1Jk3wSGtI2rkXwwl3zLRnF7irIp8pAVp9u/QLouzS0TWZBXeHWBx8LPrP3++VMFTA9bp434Emr3D2PW+Vm4Iwwtie61hJBySNBwTkbHEHh8LtUB4yHxjTYdNDoWpGrkpxRtmYBNLMO/WVOXbYyty4vNLcex8X5ob2heepe4FHiqR5f0jg/9IWnmlbqkV+CVwKS8zXaWgbvBH1lAhhde+CaqVnHsrAAmlGXUZJTj5CoPuIdzK0v6G/v1+2MjQItZXWK3dStX3iohuCWASXu6qASD/W5Eg91TLG7ionfAl/irlYUe6jzH7hmPMpswH8i/5RemvpJyjNlfebD9PosVWZ9juBefd6Ve/UFG9QfiUbcr5/2ifMDc8YZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZSq3J/wEnlfHzK8L61QAAAABJRU5ErkJggg=='
        />
      </defs>
    </svg>
  );

  const nameText = (
    <svg
      width='465'
      height='97'
      viewBox='0 0 465 97'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_df_74_101)'>
        <path
          d='M75.792 8.072L64.08 53H50.832L43.664 23.432L36.24 53H22.992L11.6 8.072H23.312L29.776 40.776L37.776 8.072H49.808L57.488 40.776L64.016 8.072H75.792ZM93.5045 16.84V25.928H108.16V34.376H93.5045V44.232H110.08V53H82.5605V8.072H110.08V16.84H93.5045ZM180.289 8.072L168.577 53H155.329L148.161 23.432L140.737 53H127.489L116.097 8.072H127.809L134.273 40.776L142.273 8.072H154.306L161.986 40.776L168.514 8.072H180.289ZM198.002 16.84V25.928H212.658V34.376H198.002V44.232H214.578V53H187.058V8.072H214.578V16.84H198.002ZM245.875 53L236.531 36.04H233.907V53H222.963V8.072H241.331C244.872 8.072 247.88 8.69066 250.355 9.928C252.872 11.1653 254.75 12.872 255.987 15.048C257.224 17.1813 257.843 19.5707 257.843 22.216C257.843 25.2027 256.99 27.8693 255.283 30.216C253.619 32.5627 251.144 34.2267 247.859 35.208L258.227 53H245.875ZM233.907 28.296H240.691C242.696 28.296 244.19 27.8053 245.171 26.824C246.195 25.8427 246.707 24.456 246.707 22.664C246.707 20.9573 246.195 19.6133 245.171 18.632C244.19 17.6507 242.696 17.16 240.691 17.16H233.907V28.296ZM297.091 53.448C293.806 53.448 290.862 52.9147 288.259 51.848C285.657 50.7813 283.566 49.2027 281.987 47.112C280.451 45.0213 279.641 42.504 279.555 39.56H291.203C291.374 41.224 291.95 42.504 292.931 43.4C293.913 44.2533 295.193 44.68 296.771 44.68C298.393 44.68 299.673 44.3173 300.611 43.592C301.55 42.824 302.019 41.7787 302.019 40.456C302.019 39.3467 301.635 38.4293 300.867 37.704C300.142 36.9787 299.225 36.3813 298.115 35.912C297.049 35.4427 295.513 34.9093 293.507 34.312C290.606 33.416 288.238 32.52 286.403 31.624C284.569 30.728 282.99 29.4053 281.667 27.656C280.345 25.9067 279.683 23.624 279.683 20.808C279.683 16.6267 281.198 13.3627 284.227 11.016C287.257 8.62667 291.203 7.432 296.067 7.432C301.017 7.432 305.006 8.62667 308.035 11.016C311.065 13.3627 312.686 16.648 312.899 20.872H301.059C300.974 19.4213 300.441 18.2907 299.459 17.48C298.478 16.6267 297.219 16.2 295.683 16.2C294.361 16.2 293.294 16.5627 292.483 17.288C291.673 17.9707 291.267 18.9733 291.267 20.296C291.267 21.7467 291.95 22.8773 293.315 23.688C294.681 24.4987 296.814 25.3733 299.715 26.312C302.617 27.2933 304.963 28.232 306.755 29.128C308.59 30.024 310.169 31.3253 311.491 33.032C312.814 34.7387 313.475 36.936 313.475 39.624C313.475 42.184 312.814 44.5093 311.491 46.6C310.211 48.6907 308.334 50.3547 305.859 51.592C303.385 52.8293 300.462 53.448 297.091 53.448ZM332.242 8.072V34.952C332.242 37.64 332.904 39.7093 334.226 41.16C335.549 42.6107 337.49 43.336 340.05 43.336C342.61 43.336 344.573 42.6107 345.938 41.16C347.304 39.7093 347.986 37.64 347.986 34.952V8.072H358.93V34.888C358.93 38.8987 358.077 42.2907 356.37 45.064C354.664 47.8373 352.36 49.928 349.458 51.336C346.6 52.744 343.4 53.448 339.858 53.448C336.317 53.448 333.138 52.7653 330.322 51.4C327.549 49.992 325.352 47.9013 323.73 45.128C322.109 42.312 321.298 38.8987 321.298 34.888V8.072H332.242ZM378.839 8.072V53H367.895V8.072H378.839ZM420.37 8.072V16.84H408.466V53H397.522V16.84H385.618V8.072H420.37ZM438.087 16.84V25.928H452.743V34.376H438.087V44.232H454.663V53H427.143V8.072H454.663V16.84H438.087ZM10.66 75.96C10.66 74.5733 10.96 73.34 11.56 72.26C12.16 71.1667 12.9933 70.32 14.06 69.72C15.14 69.1067 16.36 68.8 17.72 68.8C19.3867 68.8 20.8133 69.24 22 70.12C23.1867 71 23.98 72.2 24.38 73.72H20.62C20.34 73.1333 19.94 72.6867 19.42 72.38C18.9133 72.0733 18.3333 71.92 17.68 71.92C16.6267 71.92 15.7733 72.2867 15.12 73.02C14.4667 73.7533 14.14 74.7333 14.14 75.96C14.14 77.1867 14.4667 78.1667 15.12 78.9C15.7733 79.6333 16.6267 80 17.68 80C18.3333 80 18.9133 79.8467 19.42 79.54C19.94 79.2333 20.34 78.7867 20.62 78.2H24.38C23.98 79.72 23.1867 80.92 22 81.8C20.8133 82.6667 19.3867 83.1 17.72 83.1C16.36 83.1 15.14 82.8 14.06 82.2C12.9933 81.5867 12.16 80.74 11.56 79.66C10.96 78.58 10.66 77.3467 10.66 75.96ZM33.5144 83.14C32.1944 83.14 30.981 82.8333 29.8744 82.22C28.781 81.6067 27.9077 80.7533 27.2544 79.66C26.6144 78.5533 26.2944 77.3133 26.2944 75.94C26.2944 74.5667 26.6144 73.3333 27.2544 72.24C27.9077 71.1467 28.781 70.2933 29.8744 69.68C30.981 69.0667 32.1944 68.76 33.5144 68.76C34.8344 68.76 36.041 69.0667 37.1344 69.68C38.241 70.2933 39.1077 71.1467 39.7344 72.24C40.3744 73.3333 40.6944 74.5667 40.6944 75.94C40.6944 77.3133 40.3744 78.5533 39.7344 79.66C39.0944 80.7533 38.2277 81.6067 37.1344 82.22C36.041 82.8333 34.8344 83.14 33.5144 83.14ZM33.5144 80.02C34.6344 80.02 35.5277 79.6467 36.1944 78.9C36.8744 78.1533 37.2144 77.1667 37.2144 75.94C37.2144 74.7 36.8744 73.7133 36.1944 72.98C35.5277 72.2333 34.6344 71.86 33.5144 71.86C32.381 71.86 31.4744 72.2267 30.7944 72.96C30.1277 73.6933 29.7944 74.6867 29.7944 75.94C29.7944 77.18 30.1277 78.1733 30.7944 78.92C31.4744 79.6533 32.381 80.02 33.5144 80.02ZM58.897 68.96V83H55.477V74.58L52.337 83H49.577L46.417 74.56V83H42.997V68.96H47.037L50.977 78.68L54.877 68.96H58.897ZM65.1764 68.96V83H61.7564V68.96H65.1764ZM80.6148 83H77.1948L71.4748 74.34V83H68.0548V68.96H71.4748L77.1948 77.66V68.96H80.6148V83ZM92.8139 73.4C92.5606 72.9333 92.1939 72.58 91.7139 72.34C91.2472 72.0867 90.6939 71.96 90.0539 71.96C88.9472 71.96 88.0606 72.3267 87.3939 73.06C86.7272 73.78 86.3939 74.7467 86.3939 75.96C86.3939 77.2533 86.7406 78.2667 87.4339 79C88.1406 79.72 89.1072 80.08 90.3339 80.08C91.1739 80.08 91.8806 79.8667 92.4539 79.44C93.0406 79.0133 93.4672 78.4 93.7339 77.6H89.3939V75.08H96.8339V78.26C96.5806 79.1133 96.1472 79.9067 95.5339 80.64C94.9339 81.3733 94.1672 81.9667 93.2339 82.42C92.3006 82.8733 91.2472 83.1 90.0739 83.1C88.6872 83.1 87.4472 82.8 86.3539 82.2C85.2739 81.5867 84.4272 80.74 83.8139 79.66C83.2139 78.58 82.9139 77.3467 82.9139 75.96C82.9139 74.5733 83.2139 73.34 83.8139 72.26C84.4272 71.1667 85.2739 70.32 86.3539 69.72C87.4339 69.1067 88.6672 68.8 90.0539 68.8C91.7339 68.8 93.1472 69.2067 94.2939 70.02C95.4539 70.8333 96.2206 71.96 96.5939 73.4H92.8139ZM108.847 83.14C107.82 83.14 106.9 82.9733 106.087 82.64C105.273 82.3067 104.62 81.8133 104.127 81.16C103.647 80.5067 103.393 79.72 103.367 78.8H107.007C107.06 79.32 107.24 79.72 107.547 80C107.853 80.2667 108.253 80.4 108.747 80.4C109.253 80.4 109.653 80.2867 109.947 80.06C110.24 79.82 110.387 79.4933 110.387 79.08C110.387 78.7333 110.267 78.4467 110.027 78.22C109.8 77.9933 109.513 77.8067 109.167 77.66C108.833 77.5133 108.353 77.3467 107.727 77.16C106.82 76.88 106.08 76.6 105.507 76.32C104.933 76.04 104.44 75.6267 104.027 75.08C103.613 74.5333 103.407 73.82 103.407 72.94C103.407 71.6333 103.88 70.6133 104.827 69.88C105.773 69.1333 107.007 68.76 108.527 68.76C110.073 68.76 111.32 69.1333 112.267 69.88C113.213 70.6133 113.72 71.64 113.787 72.96H110.087C110.06 72.5067 109.893 72.1533 109.587 71.9C109.28 71.6333 108.887 71.5 108.407 71.5C107.993 71.5 107.66 71.6133 107.407 71.84C107.153 72.0533 107.027 72.3667 107.027 72.78C107.027 73.2333 107.24 73.5867 107.667 73.84C108.093 74.0933 108.76 74.3667 109.667 74.66C110.573 74.9667 111.307 75.26 111.867 75.54C112.44 75.82 112.933 76.2267 113.347 76.76C113.76 77.2933 113.967 77.98 113.967 78.82C113.967 79.62 113.76 80.3467 113.347 81C112.947 81.6533 112.36 82.1733 111.587 82.56C110.813 82.9467 109.9 83.14 108.847 83.14ZM123.111 83.14C121.791 83.14 120.578 82.8333 119.471 82.22C118.378 81.6067 117.505 80.7533 116.851 79.66C116.211 78.5533 115.891 77.3133 115.891 75.94C115.891 74.5667 116.211 73.3333 116.851 72.24C117.505 71.1467 118.378 70.2933 119.471 69.68C120.578 69.0667 121.791 68.76 123.111 68.76C124.431 68.76 125.638 69.0667 126.731 69.68C127.838 70.2933 128.705 71.1467 129.331 72.24C129.971 73.3333 130.291 74.5667 130.291 75.94C130.291 77.3133 129.971 78.5533 129.331 79.66C128.691 80.7533 127.825 81.6067 126.731 82.22C125.638 82.8333 124.431 83.14 123.111 83.14ZM123.111 80.02C124.231 80.02 125.125 79.6467 125.791 78.9C126.471 78.1533 126.811 77.1667 126.811 75.94C126.811 74.7 126.471 73.7133 125.791 72.98C125.125 72.2333 124.231 71.86 123.111 71.86C121.978 71.86 121.071 72.2267 120.391 72.96C119.725 73.6933 119.391 74.6867 119.391 75.94C119.391 77.18 119.725 78.1733 120.391 78.92C121.071 79.6533 121.978 80.02 123.111 80.02ZM139.234 83.14C137.914 83.14 136.701 82.8333 135.594 82.22C134.501 81.6067 133.627 80.7533 132.974 79.66C132.334 78.5533 132.014 77.3133 132.014 75.94C132.014 74.5667 132.334 73.3333 132.974 72.24C133.627 71.1467 134.501 70.2933 135.594 69.68C136.701 69.0667 137.914 68.76 139.234 68.76C140.554 68.76 141.761 69.0667 142.854 69.68C143.961 70.2933 144.827 71.1467 145.454 72.24C146.094 73.3333 146.414 74.5667 146.414 75.94C146.414 77.3133 146.094 78.5533 145.454 79.66C144.814 80.7533 143.947 81.6067 142.854 82.22C141.761 82.8333 140.554 83.14 139.234 83.14ZM139.234 80.02C140.354 80.02 141.247 79.6467 141.914 78.9C142.594 78.1533 142.934 77.1667 142.934 75.94C142.934 74.7 142.594 73.7133 141.914 72.98C141.247 72.2333 140.354 71.86 139.234 71.86C138.101 71.86 137.194 72.2267 136.514 72.96C135.847 73.6933 135.514 74.6867 135.514 75.94C135.514 77.18 135.847 78.1733 136.514 78.92C137.194 79.6533 138.101 80.02 139.234 80.02ZM161.277 83H157.857L152.137 74.34V83H148.717V68.96H152.137L157.857 77.66V68.96H161.277V83ZM165.756 83.16C165.156 83.16 164.662 82.9867 164.276 82.64C163.902 82.28 163.716 81.84 163.716 81.32C163.716 80.7867 163.902 80.34 164.276 79.98C164.662 79.62 165.156 79.44 165.756 79.44C166.342 79.44 166.822 79.62 167.196 79.98C167.582 80.34 167.776 80.7867 167.776 81.32C167.776 81.84 167.582 82.28 167.196 82.64C166.822 82.9867 166.342 83.16 165.756 83.16ZM171.8 83.16C171.2 83.16 170.707 82.9867 170.32 82.64C169.947 82.28 169.76 81.84 169.76 81.32C169.76 80.7867 169.947 80.34 170.32 79.98C170.707 79.62 171.2 79.44 171.8 79.44C172.387 79.44 172.867 79.62 173.24 79.98C173.627 80.34 173.82 80.7867 173.82 81.32C173.82 81.84 173.627 82.28 173.24 82.64C172.867 82.9867 172.387 83.16 171.8 83.16ZM177.845 83.16C177.245 83.16 176.751 82.9867 176.365 82.64C175.991 82.28 175.805 81.84 175.805 81.32C175.805 80.7867 175.991 80.34 176.365 79.98C176.751 79.62 177.245 79.44 177.845 79.44C178.431 79.44 178.911 79.62 179.285 79.98C179.671 80.34 179.865 80.7867 179.865 81.32C179.865 81.84 179.671 82.28 179.285 82.64C178.911 82.9867 178.431 83.16 177.845 83.16ZM183.889 83.16C183.289 83.16 182.796 82.9867 182.409 82.64C182.036 82.28 181.849 81.84 181.849 81.32C181.849 80.7867 182.036 80.34 182.409 79.98C182.796 79.62 183.289 79.44 183.889 79.44C184.476 79.44 184.956 79.62 185.329 79.98C185.716 80.34 185.909 80.7867 185.909 81.32C185.909 81.84 185.716 82.28 185.329 82.64C184.956 82.9867 184.476 83.16 183.889 83.16Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_df_74_101'
          x='0.659912'
          y='0.432129'
          width='464.003'
          height='95.728'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood
            flood-opacity='0'
            result='BackgroundImageFix'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='3' />
          <feGaussianBlur stdDeviation='5' />
          <feComposite
            in2='hardAlpha'
            operator='out'
          />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.908333 0 0 0 0 0.908333 0 0 0 0 0.908333 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_74_101'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_74_101'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='0.5'
            result='effect2_foregroundBlur_74_101'
          />
        </filter>
      </defs>
    </svg>
  );
  return (
    <section>
      <div class='absolute left-0'>
        <div class='blur h-44 w-44 bg-gradient-to-br from-cyan-600 to-cyan-200/5 rounded-tr-full -z-20 -mb-2'></div>
        <div class='blur h-44 w-44 bg-gradient-to-tr from-cyan-600 to-cyan-200/5 rounded-br-full -z-20 -mt-2'></div>
      </div>
      <div class='absolute right-0'>
        <div class='blur h-44 w-44 bg-gradient-to-bl from-purple-600 to-purple-500/5 rounded-tl-full -z-20 -mb-2'></div>
        <div class='blur h-44 w-44 bg-gradient-to-tl from-purple-600 to-purple-500/5 rounded-bl-full -z-20 -mt-2'></div>
      </div>
      <div class='constainer flex items-center justify-evenly pt-72 pb-44 w-screen'>
        <div>{nameText}</div>
        <div>{spin}</div>
      </div>
      <p id='Services'></p>
    </section>
  );
}