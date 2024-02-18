import './Planet.css';
import React from 'react';

const Planet = () => {

    return(
    <>
        
        {/* mercury */}
        
        <div class="modal fade" id='mercury'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Mercury</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>is the first planet from the Sun and the smallest in the Solar System. In English, it is named after the Roman god Mercurius.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mercuryExpanded" >Expand</button>
                        </div>
                        </div>
                    </div>
        </div>


        <div class="modal fade" id='mercuryExpanded' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Mercury</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>is the first planet from the Sun and the smallest in the Solar System. In English, it is named after the Roman god Mercurius. 
                                god of commerce and communication, and the messenger of the gods. 
                                Combined with its high orbital eccentricity, the planet's surface has widely varying sunlight intensity and temperature, 
                                with the equatorial regions ranging from −170 °C (−270 °F) at night to 420 °C (790 °F) during sunlight.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
        </div>

        {/* mercury */}



        {/* venus */}
        
        <div class="modal fade" id='venus'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Venus</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Venus is the second planet from the Sun. It has the densest atmosphere of all rocky bodies in the Solar System.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#venusExpanded" >Expand</button>
                        </div>
                        </div>
                    </div>
        </div>


        <div class="modal fade" id='venusExpanded' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Venus</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Venus is the second planet from the Sun. It has the densest atmosphere of all rocky bodies in the Solar System.
                                Like other planets in the Solar System, Venus was formed approximately 4.5 billion years ago.
                                 As of the early 2020s, it is suggested that Venus's atmosphere might be similar to one surrounding the early Earth
                                  and there may have been substantial quantities of surface liquid water.
                                   Back then, Venus might have been more conducive to life.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
        </div>

        {/* venus */}


        {/* earth */}
        
        <div class="modal fade" id='earth'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Earth</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Earth is the third planet from the Sun and the only astronomical object known to harbor life. 
                                This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#earthExpanded" >Expand</button>
                        </div>
                        </div>
                    </div>
        </div>


        <div class="modal fade" id='earthExpanded' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Earth</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Earth is the third planet from the Sun and the only astronomical object known to harbor life. 
                                This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water.
                                 Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. Earth has a rounded shape, through hydrostatic equilibrium,
                                  with an average diameter of 12,742 kilometers (7,918 mi), making it the fifth largest planetary sized and largest terrestrial object of the Solar System.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
        </div>

        {/* earth */}

        {/* mars */}
        
        <div class="modal fade" id='mars'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Mars</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#marsExpanded" >Expand</button>
                        </div>
                        </div>
                    </div>
        </div>


        <div class="modal fade" id='marsExpanded' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Mars</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Mars is no place for the faint-hearted. It’s dry, rocky, and bitter cold. The fourth planet from the Sun, 
                                Mars is one of Earth's two closest planetary neighbors (Venus is the other). 
                                Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light.
                                Despite being inhospitable to humans, robotic explorers – like NASA's Perseverance rover – 
                                are serving as pathfinders to eventually get humans to the surface of the Red Planet.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
        </div>

        {/* mars */}



        {/* jupiter */}
        
        <div class="modal fade" id='jupiter'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Jupiter</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice as massive as the other planets combined.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#jupiterExpanded" >Expand</button>
                        </div>
                        </div>
                    </div>
        </div>


        <div class="modal fade" id='jupiterExpanded' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Jupiter</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice as massive as the other planets combined.
                            Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.
                            Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium.
                             Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
        </div>

        {/* jupiter */}



        {/* saturn */}
        
        <div class="modal fade" id='saturn'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Saturn</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#saturnExpanded" >Expand</button>
                        </div>
                        </div>
                    </div>
        </div>


        <div class="modal fade" id='saturnExpanded' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Jupiter</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.
                            Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets.
                            It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's.
                             Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
        </div>

        {/* saturn */}


        {/* uranus */}
        
        <div class="modal fade" id='uranus'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Uranus</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uranusExpanded" >Expand</button>
                        </div>
                        </div>
                    </div>
        </div>


        <div class="modal fade" id='uranusExpanded' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Uranus</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways.
                            Uranus is the seventh planet from the Sun, and it's the third largest planet in our solar system – about four times wider than Earth.
                             The diameter at its equator is 31,763 miles (51,120 kilometers).
                             Uranus is a very cold and windy planet. It is surrounded by faint rings, and more than two dozen small moons as it rotates at a nearly 90-degree angle from the plane of its orbit.
                              This unique tilt makes Uranus appear to spin on its side.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
        </div>

        {/* uranus */}


        {/* neptune */}
        
        <div class="modal fade" id='neptune'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Neptune</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Neptune is the eighth, and most distant planet from the Sun. It’s the fourth-largest, and the first planet discovered with math.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#neptuneExpanded" >Expand</button>
                        </div>
                        </div>
                    </div>
        </div>


        <div class="modal fade" id='neptuneExpanded' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex justify-content-center">Neptune</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <p>Neptune is the eighth, and most distant planet from the Sun. It’s the fourth-largest, and the first planet discovered with math.
                            Dark, cold and whipped by supersonic winds, giant Neptune is the eighth and most distant major planet orbiting our Sun.
                             More than 30 times as far from the Sun as Earth, Neptune is not visible to the naked eye. In 2011, Neptune completed its first 165-year orbit since its discovery.
                             The planet’s rich blue color comes from methane in its atmosphere, which absorbs red wavelengths of light, but allows blue ones to be reflected back into space.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
        </div>

        {/* neptune */}


    </>
    );
}

export default Planet;