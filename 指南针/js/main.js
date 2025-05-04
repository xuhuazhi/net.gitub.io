let scene, camera, renderer, controls;

function init() {
    const container = document.getElementById('compass3d-container');
    if (!container) return;

    // 初始化场景
    scene = new THREE.Scene();

    // 初始化渲染器
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true // 透明背景
    });
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // 初始化相机
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(5, 5, 5); // 调整相机初始位置

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); // 强度增加到2.0
    scene.add(ambientLight);

    // 2. 添加四个方向光从不同方向照射
    const lightIntensity = 2.0; // 每个光源强度

    // 前上方光源
    const frontLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
    frontLight.position.set(0, 10, 10);
    frontLight.castShadow = false; // 禁用阴影

    // 后上方光源
    const backLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
    backLight.position.set(0, 10, -10);
    backLight.castShadow = false;

    // 左侧光源
    const leftLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
    leftLight.position.set(-10, 10, 0);
    leftLight.castShadow = false;

    // 右侧光源
    const rightLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
    rightLight.position.set(10, 10, 0);
    rightLight.castShadow = false;

    scene.add(frontLight, backLight, leftLight, rightLight);

    // 加载模型
    const loader = new THREE.GLTFLoader();
    loader.load('models/sinan1.glb', (loadedGltf) => {
        // 自动居中模型
        const box = new THREE.Box3().setFromObject(loadedGltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        loadedGltf.scene.position.sub(center);

        // 自动缩放模型
        const size = box.getSize(new THREE.Vector3()).length();
        const scale = 2 / size;
        loadedGltf.scene.scale.set(scale, scale, scale);
        loadedGltf.scene.scale.multiplyScalar(3.0); // 增加模型大小

        // 调整模型旋转，使其正面朝向用户
        loadedGltf.scene.rotation.y = Math.PI; // 旋转180度，使正面朝向用户

        // 调整模型颜色
        loadedGltf.scene.traverse((object) => {
            if (object.isMesh) {
                object.material.color.set(0x8B4513); // 橙色
                object.material.emissive.set(0x110A05); // 发光效果
                object.material.needsUpdate = true;
            }
        });

        // 添加到场景
        scene.add(loadedGltf.scene);

        // 打印模型信息
        console.log("Model loaded:", loadedGltf.scene);
        console.log("Model rotation:", loadedGltf.scene.rotation);
    });

    // 配置轨道控制器
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;

    // 窗口自适应
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// 初始化并开始动画
document.addEventListener('DOMContentLoaded', () => {
    init();
    animate();
});