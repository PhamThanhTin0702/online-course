export const courseDetail = {
    title: "What is Flutter and Why You Should Learn it in 2020",
    description: `
                    Flutter is a free and open-source mobile UI framework created by Google and released in May 2017. In a few words, it allows you to create a native mobile application with only one codebase. This means that you can use one programming language and one codebase to create two different apps (for iOS and Android).
    
                    Flutter consists of two important parts:
                    
                    An SDK (Software Development Kit): A collection of tools that are going to help you develop your applications. This includes tools to compile your code into native machine code (code for iOS and Android).
                    A Framework (UI Library based on widgets): A collection of reusable UI elements (buttons, text inputs, sliders, and so on) that you can personalize for your own needs.
                    To develop with Flutter, you will use a programming language called Dart. The language was created by Google in October 2011, but it has improved a lot over these past years.
                    
                    Dart focuses on front-end development, and you can use it to create mobile and web applications.
                    
                    If you know a bit of programming, Dart is a typed object programming language. You can compare Dart's syntax to JavaScript.
    `,
    author: "By Developer",
    chapters: [
        {
            chapter: "Chapter 1: Get Started",
                lessons: [
                    {
                        name: 'Install',
                        duration: '5 minutes',
                        type: "text",
                        isPublic: true,
                        content: `
                            You can update your PATH variable for the current session at the command line, as shown in Get the Flutter SDK. You’ll probably want to update this variable permanently, so you can run flutter commands in any terminal session.
    
                            The steps for modifying this variable permanently for all terminal sessions are machine-specific. Typically you add a line to a file that is executed whenever you open a new window. For example:
                            
                            Determine the path of your clone of the Flutter SDK. You need this in Step 3.
                            Open (or create) the rc file for your shell. Typing echo $SHELL in your Terminal tells you which shell you’re using. If you’re using Bash, edit $HOME/.bash_profile or $HOME/.bashrc. If you’re using Z shell, edit $HOME/.zshrc. If you’re using a different shell, the file path and filename will be different on your machine.
                            Add the following line and change [PATH_OF_FLUTTER_GIT_DIRECTORY] to be the path of your clone of the Flutter git repo:
                        `,
                        sourceId: "9ue1DivJxes",
                    },
                    {
                        name: 'Setup an editor',
                        duration: '5 minutes',
                        type: "video",
                        isPublic: false,
                        content: `
                            You can build apps with Flutter using any text editor combined with our command-line tools. However, we recommend using one of our editor plugins for an even better experience. These plugins provide you with code completion, syntax highlighting, widget editing assists, run & debug support, and more.
    
                            Follow the steps below to add an editor plugin for Android Studio, IntelliJ, VS Code, or Emacs. If you want to use a different editor, that’s OK, skip ahead to the next step: Test drive.
                        `,
                        sourceId: "xuakxSnFUxc",
                    },
                    {
                        name: 'Test driver',
                        duration: '5 minutes',
                        type: "text",
                        isPublic: true,
                        content: `
                            Open the IDE and select Create New Flutter Project.
                            Select Flutter Application as the project type. Then click Next.
                            Verify the Flutter SDK path specifies the SDK’s location (select Install SDK… if the text field is blank).
                            Enter a project name (for example, myapp). Then click Next.
                            Click Finish.
                            Wait for Android Studio to install the SDK and create the project.
                        `,
                        sourceId: "Xh0YQp9odv4",
                    },
                    {
                        name: 'Write your first app',
                        duration: '5 minutes',
                        type: "video",
                        isPublic: false,
                        content: `
                            This is a guide to creating your first Flutter app. If you are familiar with object-oriented code and basic programming concepts such as variables, loops, and conditionals, you can complete this tutorial. You don’t need previous experience with Dart, mobile, or web programming.
                            This codelab is part 1 of a two-part codelab. You can find part 2 on Google Developers Codelabs (as well as a copy of this codelab, part 1).
                            What you’ll learn in part 1
                            How to write a Flutter app that looks natural on iOS, Android, and the web
                            Basic structure of a Flutter app
                            Finding and using packages to extend functionality
                            Using hot reload for a quicker development cycle
                            How to implement a stateful widget
                            How to create an infinite, lazily loaded list
                            In part 2 of this codelab, you’ll add interactivity, modify the app’s theme, and add the ability to navigate to a new screen (called a route in Flutter).
    
                            What you'll use
                            You need two pieces of software to complete this lab: the Flutter SDK and an editor. This codelab assumes Android Studio, but you can use your preferred editor.
    
                            You can run this codelab by using any of the following devices:
    
                            A physical device (Android or iOS) connected to your computer and set to developer mode
                            The iOS simulator (requires installing Xcode tools)
                            The Android emulator (requires setup in Android Studio)
                            A browser (Chrome is required for debugging)
                        `,
                        sourceId: "zLwpcLJibw0",
                    },
                    {
                        name: 'Learn more',
                        duration: '5 minutes',
                        type: "text",
                        isPublic: true,
                        content: `
                            Flutter basics
                            Introduction to widgets
                            Building layouts tutorial
                            Add interactivity tutorial
                            Apply your existing knowledge
                            Flutter for Android developers
                            From Java to Dart codelab
                            Flutter for iOS developers
                            Flutter for React Native developers
                            Flutter for web developers
                            Flutter for Xamarin.Forms developers
                            Other resources
                            Flutter samples
                            Flutter cookbook
                            Bootstrap into Dart: learn more about the language
                            Flutter API Docs
                            The Complete Flutter Developer Bootcamp Using Dart
                            Udacity online Flutter training
                            Reach out to us at our mailing list. We’d love to hear from you!
                            
                            Happy Fluttering!
                        `,
                        sourceId: "xB2qsCnqAXA",
                    },
                ],
                sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                thumb: "https://trungtq.com/wp-content/uploads/2018/12/GO-3.png",
        },
        {
            chapter: "Chapter 2: User Interface",
            lessons: [
                {
                    name: 'Building layout',
                    duration: '5 minutes',
                    type: "text",
                    isPublic: true,
                    content: `
                        Flutter widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state. When a widget’s state changes, the widget rebuilds its description, which the framework diffs against the previous description in order to determine the minimal changes needed in the underlying render tree to transition from one state to the next.
                        The runApp() function takes the given Widget and makes it the root of the widget tree. In this example, the widget tree consists of two widgets, the Center widget and its child, the Text widget. The framework forces the root widget to cover the screen, which means the text “Hello, world” ends up centered on screen. The text direction needs to be specified in this instance; when the MaterialApp widget is used, this is taken care of for you, as demonstrated later. A SafeArea widget is also used to properly pad the text so it appears below the display on the top of the screen.
    
                        When writing an app, you’ll commonly author new widgets that are subclasses of either StatelessWidget or StatefulWidget, depending on whether your widget manages any state. A widget’s main job is to implement a build() function, which describes the widget in terms of other, lower-level widgets. The framework builds those widgets in turn until the process bottoms out in widgets that represent the underlying RenderObject, which computes and describes the geometry of the widget.
                    `,
                    sourceId: "3ym1ZCoeNJc",
                },
                {
                    name: 'Navigation & routing',
                    duration: '5 minutes',
                    type: "video",
                    isPublic: false,
                    content: `
                        To learn about Flutter’s original (1.0) navigation and routing mechanism, see the Navigation recipes in the Flutter cookbook and the Navigator API docs. The original navigation model uses an imperative approach.
    
                        To learn about Flutter’s updated (2.0) navigation and routing mechanism, which uses a declarative approach, see Learning Flutter’s new navigation and routing system.
                        
                        Note that this new mechanism isn’t a breaking change—you can continue to use the original approach if that serves you well. If you want to implement deep linking, or take advantage of multiple navigators, check out the 2.0 version.
                    `,
                    sourceId: "CNYgKBaZ1dQ",
                },
                {
                    name: 'Animations',
                    duration: '5 minutes',
                    type: "text",
                    isPublic: true,
                    content: `
                        Well-designed animations make a UI feel more intuitive, contribute to the slick look and feel of a polished app, and improve the user experience. Flutter’s animation support makes it easy to implement a variety of animation types. Many widgets, especially Material widgets, come with the standard motion effects defined in their design spec, but it’s also possible to customize these effects.
                        Animation types
                        Generally, animations are either tween- or physics-based. The following sections explain what these terms mean, and point you to resources where you can learn more.
    
                        Tween animation
                        Short for in-betweening. In a tween animation, the beginning and ending points are defined, as well as a timeline, and a curve that defines the timing and speed of the transition. The framework calculates how to transition from the beginning point to the end point.
    
                        The documents listed above, such as the Animations tutorial, are not specifically about tweening, but they use tweens in their examples.
    
                        Physics-based animation
                        In physics-based animation, motion is modeled to resemble real-world behavior. When you toss a ball, for example, where and when it lands depends on how fast it was tossed and how far it was from the ground. Similarly, dropping a ball attached to a spring falls (and bounces) differently than dropping a ball attached to a string.
    
                        Animate a widget using a physics simulation
                        A recipe in the animations section of the Flutter cookbook.
    
                        Flutter Gallery
                        Under Material Components, the Grid example demonstrates a fling animation. Select one of the images from the grid and zoom in. You can pan the image with flinging or dragging gestures.
    
                        Also see the API documentation for AnimationController.animateWith and SpringSimulation.
    
                        Pre-canned animations
                        If you are using Material widgets, you might check out the animations package available on pub.dev. This package contains pre-built animations for the following commonly used patterns: Container transforms, shared axis transitions, fade through transitions, and fade transitions.
    
                        Common animation patterns
                        Most UX or motion designers find that certain animation patterns are used repeatedly when designing a UI. This section lists some of the commonly used animation patterns, and tells you where to learn more.
    
                        Animated list or grid
                        This pattern involves animating the addition or removal of elements from a list or grid.
    
                        AnimatedList example
                        This demo, from the Sample app catalog, shows how to animate adding an element to a list, or removing a selected element. The internal Dart list is synced as the user modifies the list using the plus (+) and minus (-) buttons.
                        Shared element transition
                        In this pattern, the user selects an element—often an image—from the page, and the UI animates the selected element to a new page with more detail. In Flutter, you can easily implement shared element transitions between routes (pages) using the Hero widget.
    
                        Hero animations How to create two styles of Hero animations:
                        The hero flies from one page to another while changing position and size.
                        The hero’s boundary changes shape, from a circle to a square, as its flies from one page to another.
                        Flutter Gallery
                        You can build the Gallery app yourself, or download it from the Play Store. The Shrine demo includes an example of a hero animation.
    
                        Also see the API documentation for the Hero, Navigator, and PageRoute classes.
                        Staggered animation
                        Animations that are broken into smaller motions, where some of the motion is delayed. The smaller animations might be sequential, or might partially or completely overlap.
    
                        Staggered Animations
                        Other resources
                        Learn more about Flutter animations at the following links:
    
                        Animation samples from the Sample app catalog.
    
                        Animation recipes from the Flutter cookbook.
    
                        Animation videos from the Flutter YouTube channel.
    
                        Animations: overview
                        A look at some of the major classes in the animations library, and Flutter’s animation architecture.
    
                        Animation and motion widgets
                        A catalog of some of the animation widgets provided in the Flutter APIs.
    
                        The animation library in the Flutter API documentation
                        The animation API for the Flutter framework. This link takes you to a technical overview page for the library.
                    `,
                    sourceId: "4ONLQzHH1Kk",
                },
                {
                    name: 'Avandced UI',
                    duration: '5 minutes',
                    type: "video",
                    isPublic: false,
                    content: `
                        Pointers
                        Pointers represent raw data about the user’s interaction with the device’s screen. There are four types of pointer events:
                        
                        PointerDownEvent
                        The pointer has contacted the screen at a particular location.
                        PointerMoveEvent
                        The pointer has moved from one location on the screen to another.
                        PointerUpEvent
                        The pointer has stopped contacting the screen.
                        PointerCancelEvent
                        Input from this pointer is no longer directed towards this app.
                        On pointer down, the framework does a hit test on your app to determine which widget exists at the location where the pointer contacted the screen. The pointer down event (and subsequent events for that pointer) are then dispatched to the innermost widget found by the hit test. From there, the events bubble up the tree and are dispatched to all the widgets on the path from the innermost widget to the root of the tree. There is no mechanism for canceling or stopping pointer events from being dispatched further.
                        
                        To listen to pointer events directly from the widgets layer, use a Listener widget. However, generally, consider using gestures (as discussed below) instead.
                        
                        Gestures
                        Gestures represent semantic actions (for example, tap, drag, and scale) that are recognized from multiple individual pointer events, potentially even multiple individual pointers. Gestures can dispatch multiple events, corresponding to the lifecycle of the gesture (for example, drag start, drag update, and drag end):
                        
                        Tap
                        
                        onTapDown
                        A pointer that might cause a tap has contacted the screen at a particular location.
                        onTapUp
                        A pointer that will trigger a tap has stopped contacting the screen at a particular location.
                        onTap
                        The pointer that previously triggered the onTapDown has also triggered onTapUp which ends up causing a tap.
                        onTapCancel
                        The pointer that previously triggered the onTapDown will not end up causing a tap.
                        Double tap
                        
                        onDoubleTap
                        The user has tapped the screen at the same location twice in quick succession.
                        Long press
                        
                        onLongPress
                        A pointer has remained in contact with the screen at the same location for a long period of time.
                        Vertical drag
                        
                        onVerticalDragStart
                        A pointer has contacted the screen and might begin to move vertically.
                        onVerticalDragUpdate
                        A pointer that is in contact with the screen and moving vertically has moved in the vertical direction.
                        onVerticalDragEnd
                        A pointer that was previously in contact with the screen and moving vertically is no longer in contact with the screen and was moving at a specific velocity when it stopped contacting the screen.
                        Horizontal drag
                        
                        onHorizontalDragStart
                        A pointer has contacted the screen and might begin to move horizontally.
                        onHorizontalDragUpdate
                        A pointer that is in contact with the screen and moving horizontally has moved in the horizontal direction.
                        onHorizontalDragEnd
                        A pointer that was previously in contact with the screen and moving horizontally is no longer in contact with the screen and was moving at a specific velocity when it stopped contacting the screen.
                        Pan
                        
                        onPanStart
                        A pointer has contacted the screen and might begin to move horizontally or vertically. This callback causes a crash if onHorizontalDragStart or onVerticalDragStart is set.
                        onPanUpdate
                        A pointer that is in contact with the screen and is moving in the vertical or horizontal direction. This callback causes a crash if onHorizontalDragUpdate or onVerticalDragUpdate is set.
                        onPanEnd
                        A pointer that was previously in contact with screen is no longer in contact with the screen and is moving at a specific velocity when it stopped contacting the screen. This callback causes a crash if onHorizontalDragEnd or onVerticalDragEnd is set.
                        Adding gesture detection to widgets
                        To listen to gestures from the widgets layer, use a GestureDetector.
                        
                        If you’re using Material Components, many of those widgets already respond to taps or gestures. For example, IconButton and TextButton respond to presses (taps), and ListView responds to swipes to trigger scrolling. If you are not using those widgets, but you want the “ink splash” effect on a tap, you can use InkWell.
                        
                        Gesture disambiguation
                        At a given location on screen, there might be multiple gesture detectors. All of these gesture detectors listen to the stream of pointer events as they flow past and attempt to recognize specific gestures. The GestureDetector widget decides which gestures to attempt to recognize based on which of its callbacks are non-null.
                        
                        When there is more than one gesture recognizer for a given pointer on the screen, the framework disambiguates which gesture the user intends by having each recognizer join the gesture arena. The gesture arena determines which gesture wins using the following rules:
                        
                        At any time, a recognizer can declare defeat and leave the arena. If there’s only one recognizer left in the arena, that recognizer is the winner.
                        
                        At any time, a recognizer can declare victory, which causes it to win and all the remaining recognizers to lose.
                        
                        For example, when disambiguating horizontal and vertical dragging, both recognizers enter the arena when they receive the pointer down event. The recognizers observe the pointer move events. If the user moves the pointer more than a certain number of logical pixels horizontally, the horizontal recognizer declares victory and the gesture is interpreted as a horizontal drag. Similarly, if the user moves more than a certain number of logical pixels vertically, the vertical recognizer declares victory.
                        
                        The gesture arena is beneficial when there is only a horizontal (or vertical) drag recognizer. In that case, there is only one recognizer in the arena and the horizontal drag is recognized immediately, which means the first pixel of horizontal movement can be treated as a drag and the user won’t need to wait for further gesture disambiguation.
                    `,
                    sourceId: "cnOIfm7imwQ",
                },
            ],
            sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            thumb: "https://trungtq.com/wp-content/uploads/2018/12/GO-3.png",
        },
        {
            chapter: "Chapter 3: Performance & Optimization",
                lessons: [
                    {
                        name: 'Overview',
                        duration: '5 minutes',
                        type: "text",
                        isPublic: true,
                        content: `
                            What is performance? Why is performance important? How do I improve performance?
    
                            Our goal is to answer those three questions (mainly the third one), and anything related to them. This document should serve as the single entry point or the root node of a tree of resources that addresses any questions that you have about performance.
                            
                            The answers to the first two questions are mostly philosophical, and not as helpful to many developers who visit this page with specific performance issues that need to be solved. Therefore, the answers to those questions are in the appendix.
                            
                            To improve performance, you first need metrics: some measurable numbers to verify the problems and improvements. In the metrics page, you’ll see which metrics are currently used, and which tools and APIs are available to get the metrics.
                            
                            There is a list of Frequently asked questions, so you can find out if the questions you have or the problems you’re having were already answered or encountered, and whether there are existing solutions. (Alternatively, you can check the Flutter GitHub issue database using the performance label.)
                            
                            Finally, the performance issues are divided into four categories. They correspond to the four labels that are used in the Flutter GitHub issue database: “perf: speed”, “perf: memory”, “perf: app size”, “perf: energy”.
                            
                            The rest of the content is organized using those four categories. (Note that these docs are in the process of being expanded.)
                        `,
                        sourceId: "qucruq018y0",
                    },
                    {
                        name: 'App size',
                        duration: '5 minutes',
                        type: "video",
                        isPublic: false,
                        content: `
                            Measuring your app's size
                            Many developers are concerned with the size of their compiled app. As the APK, app bundle, or IPA version of a Flutter app is self-contained and holds all the code and assets needed to run the app, its size can be a concern. The larger an app, the more space it requires on a device, the longer it takes to download, and it may break the limit of useful features like Android instant apps.
                            
                            Debug builds are not representative
                            By default, launching your app with flutter run, or by clicking the Play button in your IDE (as used in Test drive and Write your first Flutter app), generates a debug build of the Flutter app. The app size of a debug build is large due to the debugging overhead that allows for hot reload and source-level debugging. As such, it is not representative of a production app end users download.
                            
                            Checking the total size
                            A default release build, such as one created by flutter build apk or flutter build ios, is built to conveniently assemble your upload package to the Play Store and App Store. As such, they’re also not representative of your end-users’ download size. The stores generally reprocess and split your upload package to target the specific downloader and the downloader’s hardware, such as filtering for assets targeting the phone’s DPI, filtering native libraries targeting the phone’s CPU architecture.
                            
                            Estimating total size
                            To get the closest approximate size on each platform, use the following instructions.
                            
                            Android
                            Follow the Google Play Console’s instructions for checking app download and install sizes.
                            
                            Produce an upload package for your application:
                        `,
                        sourceId: "4jD2LTaneHY",
                    },
                    {
                        name: 'Rendering performance',
                        duration: '5 minutes',
                        type: "text",
                        isPublic: true,
                        content: `
                            General advice
                            If you are seeing janky (non smooth) animations, make sure that you are profiling performance with an app built in profile mode. The default Flutter build creates an app in debug mode, which is not indicative of release performance. For information, see Flutter’s build modes.
                            
                            A couple common pitfalls:
                            
                            Rebuilding far more of the UI than expected each frame. To track widget rebuilds, see Show performance data.
                            Building a large list of children directly, rather than using a ListView.
                            For more information on evaluating performance including information on common pitfalls, see the following docs:
                            
                            Performance best practices
                            Flutter performance profiling
                            Mobile-only advice
                            Do you see noticeable jank on your mobile app, but only on the first run of an animation? If so, see Reduce shader animation jank on mobile.
                            
                            Web-only advice
                            The following series of articles cover what the Flutter Material team learned when improving performance of the Flutter Gallery app on the web:
                            
                            Optimizing performance in Flutter web apps with tree shaking and deferred loading
                            Improving perceived performance with image placeholders, precaching, and disabled navigation transitions
                            Building performant Flutter widgets
                        `,
                        sourceId: "aNCiM92I_g0",
                    },
                    {
                        name: 'Deferred components',
                        duration: '5 minutes',
                        type: "video",
                        isPublic: false,
                        content: `
                            Introduction
                            Flutter has the capability to build apps that can download additional Dart code and assets at runtime. This allows apps to reduce install apk size and download features and assets when needed by the user.
                            
                            We refer to each uniquely downloadable bundle of Dart libraries and assets as a “deferred component”. This is achieved by using Dart’s deferred imports, which can be compiled into split AOT shared libraries.
                            
                            Note: This feature is currently only available on Android, taking advantage of Android and Google Play Stores’ dynamic feature modules to deliver the deferred components packaged as Android modules. Deferred code does not impact other platforms, which continue to build as normal with all deferred components and assets included at initial install time.
                            
                            Also, note that this is an advanced feature.
                            
                            Though modules can be defer loaded, the entire application must be completely built and uploaded as a single Android App Bundle. Dispatching partial updates without re-uploading new Android App Bundles for the entire application is not supported.
                            
                            Deferred loading is only performed when the app is compiled to release or profile mode. In debug mode, all deferred components are treated as regular imports, so they are present at launch and load immediately. Therefore, debug builds can still hot reload.
                            
                            For a deeper dive into the technical details of how this feature works, see Deferred Components on the Flutter wiki.
                            
                            How to set your project up for deferred components
                            The following instructions explain how to set up your Android app for deferred loading.
                        `,
                        sourceId: "wMZPnBhBpWE",
                    },
                    {
                        name: 'Performance metrics',
                        duration: '5 minutes',
                        type: "text",
                        isPublic: true,
                        content: `
                            Performance metrics
                            Startup time to the first frame
                            Check the time when WidgetsBinding.instance.firstFrameRasterized is true.
                            See the perf dashboard.
                            Frame buildDuration, rasterDuration, and totalSpan
                            See FrameTiming in the API docs.
                            Statistics of frame buildDuration (*_frame_build_time_millis)
                            We recommend monitoring four stats: average, 90th percentile, 99th percentile, and worst frame build time.
                            See, for example, metrics for the flutter_gallery__transition_perf test.
                            Statistics of frame rasterDuration (*_frame_build_time_millis)
                            We recommend monitoring four stats: average, 90th percentile, 99th percentile, and worst frame build time.
                            See, for example, metrics for the flutter_gallery__transition_perf test.
                            CPU/GPU usage (a good approximation for energy use)
                            The usage is currently only available through trace events. See profiling_summarizer.dart.
                            See metrics for the simple_animation_perf_ios test.
                            release_size_bytes to approximately measure the size of a Flutter app
                            See the basic_material_app_android, basic_material_app_ios, hello_world_android, hello_world_ios, flutter_gallery_android, and flutter_gallery_ios tests.
                            See metrics in the dashboard.
                            For info on how to measure the size more accurately, see the app size page.
                            For a complete list of performance metrics Flutter measures per commit, visit the following sites, click Query, and filter the test and sub_result fields:
                            
                            https://flutter-flutter-perf.skia.org/e/
                            https://flutter-engine-perf.skia.org/e/
                        `,
                        sourceId: "Lmp1cFKlWVQ",
                    },
                ],
                sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                thumb: "https://trungtq.com/wp-content/uploads/2018/12/GO-3.png",
        },
    ]
}