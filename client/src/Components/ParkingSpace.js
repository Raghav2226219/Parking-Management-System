import React from 'react'
import '../Styles/ParkingSpace.css'
const ParkingSpace = () => {
  return (
    <>
    <main>
        <section class="parking-section">
            <h2>Parking Spaces</h2>
            <div class="parking-container">
                <div class="parking-space">
                    <h3>2-Wheeler</h3>
                    <div class="space-boxes">
                        <div class="space available"> <div class="text">A1</div> </div>
                        <div class="space available"> <div class="text">A2</div> </div>
                        <div class="space available"> <div class="text">A3</div> </div>
                        <div class="space available"> <div class="text">A4</div> </div>
                        <div class="space available"> <div class="text">A5</div> </div>
                        <div class="space available"> <div class="text">A6</div> </div>
                        <div class="space available"> <div class="text">A7</div> </div>
                        <div class="space available"> <div class="text">A8</div> </div>
                        <div class="space available"> <div class="text">A9</div> </div>
                        <div class="space available"> <div class="text">A10</div> </div>
                        
                    </div>
                    <p>Total Available: <span class="available-count">10</span></p>
                </div>
                <div class="parking-space">
                    <h3>3-Wheeler</h3>
                    <div class="space-boxes">
                        <div class="space available"> <div class="text">B1</div> </div>
                        <div class="space available"> <div class="text">B2</div> </div>
                        <div class="space available"> <div class="text">B3</div> </div>
                        <div class="space available"> <div class="text">B4</div> </div>
                        <div class="space available"> <div class="text">B5</div> </div>
                        <div class="space available"> <div class="text">B6</div> </div>
                        <div class="space available"> <div class="text">B7</div> </div>
                        <div class="space available"> <div class="text">B8</div> </div>
                        <div class="space available"> <div class="text">B9</div> </div>
                        <div class="space available"> <div class="text">B10</div> </div>
                    </div>
                    <p>Total Available: <span class="available-count">10</span></p>
                </div>
                <div class="parking-space">
                    <h3>4-Wheeler</h3>
                    <div class="space-boxes">
                        <div class="space available"> <div class="text">C1</div> </div>
                        <div class="space available"> <div class="text">C2</div> </div>
                        <div class="space available"> <div class="text">C3</div> </div>
                        <div class="space available"> <div class="text">C4</div> </div>
                        <div class="space available"> <div class="text">C5</div> </div>
                        <div class="space available"> <div class="text">C6</div> </div>
                        <div class="space available"> <div class="text">C7</div> </div>
                        <div class="space available"> <div class="text">C8</div> </div>
                        <div class="space available"> <div class="text">C9</div> </div>
                        <div class="space available"> <div class="text">C10</div> </div>
                    </div>
                    <p>Total Available: <span class="available-count">10</span></p>
                </div>
            </div>
        </section>
    </main>
    </>
      




    
  )
}

export default ParkingSpace
