import React from 'react'

function Home() {
  return (
    <>
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-info">Alert</span> Boston, a wheaten terrier,
          is at large in Newtown - please keep an eye out for Boston!
        </p>
      </div>
      <section className="container">
        <div className="columns features">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <figure className="image is-4by3">
                  <img
                    src="https://picsum.photos/640/480/?random"
                    alt="Description"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Search lost pets</h4>
                  <p>Look through our collection of lost pets.</p>
                  <p>
                    <a href="#">Search lost pets</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <figure className="image is-4by3">
                  <img
                    src="https://picsum.photos/640/480/?random"
                    alt="Description"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Search found pets</h4>
                  <p>Look through our collection of found pets.</p>
                  <p>
                    <a href="#">Search found pets</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <figure className="image is-4by3">
                  <img
                    src="https://picsum.photos/640/480/?random"
                    alt="Description"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4> Report your pet lost or found </h4>
                  <p>Click below to report a lost or found pet</p>
                  <div class="buttons are-small is-centered">
                    <button class="button is-danger is-rounded">Report lost pet</button>
                    <button class="button is-info is-rounded">Report found pet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container is-widescreen">
  <div class="notification is-info">
    Top 10 <strong>tips</strong> <em>for</em> pet parents who have an AWOL pet.
  </div>
</div>

      </section>
    </>
  )
}

export default Home

