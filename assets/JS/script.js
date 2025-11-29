
        var projectRow = document.getElementById('project-row');
        var techIcons = document.getElementById('tech-icon-row');
        
        for (var i = 0; i < projects.length; i++) {
            projectRow.innerHTML += `
                        
                    <div class="col-lg-4 col-md-6 col-12 mb-4 d-flex" data-aos="fade-up" data-aos-delay="${i * 100}">
                        <div class="bg-secondary bg-opacity-25 p-3 rounded-4 d-flex flex-column w-100">
                            <div class="rounded-4 overflow-hidden">
                                <img src="${projects[i].image}" alt="${projects[i].name}"
                                    class="img-fluid w-100 h-100" style="object-fit:cover;">
                            </div>

                            <div class="description d-flex flex-column flex-grow-1 mt-2">
                                <h5 class=" mt-2 fw-bold">${projects[i].name}</h5>
                                <p class="fs-6 flex-grow-1" style="color: #c8c4c4;">${projects[i].description}</p>
                                <a href="${projects[i].link}"
                                    class="btn btn-dark mt-2 justify-content-center d-flex" target="_blank">View
                                    Project</a>
                            </div>
                        </div>
                    </div>

        `
        };

        for (var i = 0; i < techs.length; i++) {
            techIcons.innerHTML += `
            <div class="col-6 col-sm-4 col-md-2 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="${i * 100}">
                        <i class="${techs[i].icon} fa-5x" style="color: ${techs[i].color};" title="${techs[i].name}"></i>
                    </div>
                    `
        }


