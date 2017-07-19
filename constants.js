angular.module("exampleApp")
    .constant("ACCOUNTS", [{
            id: 1,
            value: "New User",
            text: "Add New"
        },
        {
            id: 2,
            value: "Admin",
            text: "Admin"
        },
        {
            id: 3,
            value: "project manager",
            text: "Project Manager"
        },
        {
            id: 4,
            value: "product manager",
            text: "Product Manager"
        },
        {
            id: 5,
            value: "team leader",
            text: "Team Leader"
        }
    ])
    .constant("TYPES", [{
            id: 11,
            value: "administrator",
            text: "ADMINISTRATOR"
        },
        {
            id: 22,
            value: "devops",
            text: "DEVOPS"
        },
        {
            id: 33,
            value: "support specialist",
            text: "SUPPORT SPECIALIST"
        },
        {
            id: 44,
            value: "ui/ux designer",
            text: "UI/UX DESIGNER"
        }
    ])
    .constant("PROFILES", [{
            id: 111,
            value: "junior",
            text: "JUNOIR"
        },
        {
            id: 222,
            value: "middle",
            text: "MIDDLE"
        },
        {
            id: 333,
            value: "senior",
            text: "SENIOR"
        }
    ])
    .constant("LEVELS", [{
            id: 1111,
            value: "first",
            text: "FIRST"
        },
        {
            id: 2222,
            value: "second",
            text: "SECOND"
        },
        {
            id: 3333,
            value: "third",
            text: "THIRD"
        },
        {
            id: 4444,
            value: "fourth",
            text: "FOURTH"
        },
        {
            id: 4444,
            value: "fifth",
            text: "FIFTH"
        }
    ])
    .constant("MAPS", [{
            id: 22,
            value: "roadmap",
            text: "ROADMAP"
        },
        {
            id: 23,
            value: "satellite",
            text: "SATELLITE"
        },
        {
            id: 24,
            value: "hybrid",
            text: "HYBRID"
        },
        {
            id: 25,
            value: "terrain",
            text: "TERRAIN"
        }
    ])
    /*
                
                .directive("hightlight", function() {
                    return {
                        restrict: 'A',
                        link: function(scope, element) {

                            element.on("mouseover", function(event) {
                                angular.element(element).css({ color: scope.color })

                            })
                            element.on("mouseout", function(event) {
                                angular.element(element).css({ color: "black" })
                            })
                        },
                        scope: { color: "@" }
                    };
                })*/