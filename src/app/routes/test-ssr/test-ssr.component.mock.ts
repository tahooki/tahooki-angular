import { PostItem } from 'src/app/routes/test-ssr/test-ssr.component.model';

export const postMockList: PostItem[] = [
  {
    'post_id': { '$oid': '5c5bd065fc13ae230e000000' },
    'title':   'transition real-time architectures',
    'content': 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    'name':    'edigiorgio0',
    'img':     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALtSURBVDjLbVPtS1NxFD73Nid6R7o13XxpY8WgJWTIPhQskMj+AKFvQpB+HtYHIUd9EJQC8R8YftoQhNk/kGStNV+a1cSyMXQ5tcbm1DX3du/93ds5FxQlL5wxfr/zPOd5nnMvp6oqXPTEYrFBWZYHGGMgSVKwt7d3+qI+7izB2tqaCwF7WMcIzthstha6X1payjU2NlrxzIBkHf39/RsnGP4M2I/AdWxKYJMFi9VqNaDS6/WMzkRRTGCtB4NB/zmCeDzuEwRhyG6380ajkSYlsSzVahUqlQooikKESby3ohXebDYPTU5O+girox9k5TOZDHnhaKLFYhF4nifv2hSXy0XnAt1tb29DOBxWkZw/l0E0Gh1vamoapakUXKFQgHQ6DXV1deBwOECn02mE5XKZ7E6MjIxoCjgMaBXltmIJVqvVWCqV4PDwkAgX8f/L+vp6QFtjbrf7Lg1Dq7CwsHCIZCXEZLlIJMKcTiefz+ehWCxqEzc2NiCVSvX5fL55muL3+x/8aJx5W5IK8KjjNRgMBrIJU1NTCk+yyBuyadJpCjWgndP1Uk9VFqHT7ILpLS9lBqSU7HCBQGB1f3+/FWUK3d3dRkod1waBxFNMX2SiIoMkM77d5ORudXpg5dc7iO8sw5WV3l0kzp6GODc3N97W1jZKSiiwma1n0Nf1GJiqAFMYKKBCprALRqEVFrfmYTX9QUZVem2NoVDoBbI9b25uhqOjI00BSSbwdj4JEqqQFQkkJsHfWhFuX70Hx1JZt5yKVDUCzEDBDXANDQ30UsHm5mapaq0KMpPBctmGYKaR/SmkwWSwwpedT7Cc+JwrA9hPLYyNjfkPDg6eYDhZk8nUk3SEftcwLFERoYJqrptvwp1rDyGWjkJ4/eNBia+0/55Qa+c+puHhYRda2UMrx7j/jMfjaaG0Z2dnc99uzHBu231z+Of77/iq9SBY/O9rPPt4vd7BXC43QCvmOC74tevNK6ZcMlcUVpedUOWTvn/PQ+bC95cxOwAAAABJRU5ErkJggg=='
  },
  {
    'post_id': { '$oid': '5c5bd065fc13ae230e000001' },
    'title':   'target holistic functionalities',
    'content': 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    'name':    'sscudamore1',
    'img':     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI9SURBVDjLpVNfSFNRHP7u3MiHZqJCumZZamVRaSas0V40i4gKeoreIjKI3iK40GsPEpQEIRRBj/17kYKMSodlZk8rmy42mUjjLrfVnPt/77nn9jt3NSFfFH/w8f3OOfd+v3/nSIZhYD1mwTrN+s8JBoOXNU0bIBTJcoVCIZ3P5+OEL7lcLkacIg4R3sqyzFYI0Ad36UcQZI/Hc3/NGWQyGRtFHSahp2spQRoLsx/EzmzICxJA9Z7j0HUOZkKHxnQwTYdKrGlizUxWS35ECBibremyopiKGAwX4Ia51omFL/Z0zk2f9DEW+L08hRaHHZFYFq1bqjC/kMbuxiqElSXsbapGKJJCe0sNAvNJdO2qM/dEhqrKIHlnVcogg0g8ayqLAxGRiSjlUowytzfX4uDOWoz6ohiZisPCWCml7o4GHO10UK0cJ12NKKo6znqaUFA5zvc0Q0m8R0i5hYev+3Dpzml8mnls9kN65c8ajso85qJLYExEXo4qMtCIo79GUGH3obPtEJw1rfBOD2HS/wHFpBtWs8sU9dThrXgyGsa57h0rRtU3cB1nuo5Bt+g40NCLdzPP4drnxrOhYVhVjYHZOD5/T2BbvR0f/QtmhznnJaYpxBajsEkbcaLtoil4recBXn4bpLMXsBZVlghkjbr/5lvy/96BZHoR08oEvirjkHsfof/NBVRWbIAk2QxpNa/RddVx07l90w33/iNore9A6KcPE1PjiMylbkurfc4k0k90hWAniJs3OHlPkf8A2YeC/G6HEpkAAAAASUVORK5CYII='
  },
  {
    'post_id': { '$oid': '5c5bd065fc13ae230e000002' },
    'title':   'implement web-enabled communities',
    'content': 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    'name':    'mboarer2',
    'img':     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALZSURBVBgZBcFLiFVlAADg7zzuPLzjzDjOMINMitIie5gF+UAkIZSgRQuXLZIWrY021dYIggJdJURElJsoqlWRYA9GshGFCNQeOjoTk6bjeOd5zzn/f07flzRNA459ObcHJ3cM9+1fq2prVa2qa+uh7mAZ9xCxiAV8iu9zgDqEvU9ODOx//dkxALBa1kNrZT202I2TZcVyEd28t+Lb66uHcTwHqEMYH+xJwNyDqJUk8oQsp7eV2tqbytJUK+OpyX5bhtojH07Pv58CxKoabOeEmuUy0al4UNDp0umysM5/KxG8eWbW/u1tj4+2xnKAWFUjG3tSqwWr3ShNEzmyjDQjk8gSaiRxyYUbiy7PduZzgFiW40P9mc56sFY00rSRpaQxkaVkGlmGJnNnqXDq7N9LOJYDhLLcNj7Y0uk2AjRkMZE2iGQaeZOqG2IrCmXY/s1rB+6nALEstk0M9VotG0lKliRSpEjw+YUjPjq3RxkKoSjEsoiQwvMnvusXQ09vK1VGUg1qjVrUqDWKUJoc3emVj3dbWeuEUJZLkEMoyrF2u0+aUEPD19OHNXVQ1kEZgy2bHrZzYq/l7qr766/m3VC0ub+SQyyLDXm7R56SpYlYJ0JdOvzYy2JTi3VUa8x35jwxecBKue7S7E+dXW+nI/nB42dGcWLPI1vdXmrcvBO1++iGUmxqtxb+UtVBqCtVrCwVy3Y/dNBKtZb+OjO1kMeyfA4vXLo6Y3E9t1I0qtjo6goxGB/cKtRRbGr/dmaNDEy4PHfe+etTd8vgSB6r6ukXD+3qf+ulfQDg6OnCJ7+8p6xL3VDaMfqofTuOuHhryrk/fl4tokPz7zRX8lhVM7fvdXx29qrhgX7Dg32G271OHv3dxg09entSvXnqmXcHJGm/6Ru/ad89dmrm9AdXIK9D+GLq4rXJqYvXtmEzNmMTNmGor6fV6utr6YxWfvjzR0P/vDGTh7GvAP4H2uh1wse2x/0AAAAASUVORK5CYII='
  }
];
