# SEO Content Tester

Test your page content. Inspired by Yoast SEO

[Demo](https://syki.pl/seo-content-tester)

Function:

```js
testSeoContent({
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor rutrum mauris id tristique. Quisque venenatis sodales urna, eget blandit ligula consequat ut.',
    slug: 'lorem-ipsum',
    content:
        '#Lorem\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor rutrum mauris id tristique. Quisque venenatis sodales urna, eget blandit ligula consequat ut. Ut consectetur urna ac metus varius tincidunt. Donec scelerisque aliquet turpis, at tincidunt augue volutpat blandit. Vestibulum porttitor odio sed sem mattis, sollicitudin venenatis arcu dictum. Nulla tincidunt tempus est eu aliquam. Fusce ut eros eros. Suspendisse placerat sapien ut malesuada gravida. Etiam nec ultrices lectus, vel ultrices mi. Mauris euismod mattis odio. Aenean tristique fringilla ex, at blandit sapien dictum eu.',
    contentType: 'md',
})
```

Results:

```json
{
    "title": {
        "isLengthCorrect": {
            "passed": false,
            "details": {
                "length": 39
            },
            "reason": "too_short",
            "min": 46,
            "max": 70
        }
    },
    "slug": {
        "isLengthCorrect": {
            "passed": true,
            "details": {
                "length": 11
            },
            "min": 0,
            "max": 40
        }
    },
    "description": {
        "isLengthCorrect": {
            "passed": true,
            "details": {
                "length": 163
            },
            "min": 120,
            "max": 320
        }
    },
    "content": {
        "isWordLengthCorrect": {
            "passed": false,
            "details": {
                "length": 85
            },
            "reason": "too_short",
            "min": 300,
            "max": 100000
        },
        "h1Length": {
            "passed": true,
            "details": {
                "length": 1
            },
            "min": 1
        },
        "subHeadingsLength": {
            "passed": false,
            "details": {
                "length": 0
            },
            "reason": "too_short",
            "min": 1
        },
        "externalLinksLength": {
            "passed": false,
            "details": {
                "length": 0
            },
            "reason": "too_short",
            "min": 1
        },
        "internalLinksLength": {
            "passed": false,
            "details": {
                "length": 0
            },
            "reason": "too_short",
            "min": 1
        }
    }
}
```
