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
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(10, 10, 10); // 调整光源位置
    scene.add(directionalLight);

    // 加载模型
    const loader = new THREE.GLTFLoader();
    loader.load('models/zaozhishu.glb', (loadedGltf) => {
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
                // 主色调改为珍珠白
                object.material.color.setHex(0xfff5e1);  // 原0xff5500

                // 自发光色改为浅金色
                object.material.emissive.setHex(0x554433);  // 原0x331100

                // 增加材质反射属性
                object.material.metalness = 0.3;  // 添加金属质感
                object.material.roughness = 0.6;  // 表面粗糙度

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
// 调整光源配置增强浅色效果
const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);  // 增强光照强度
directionalLight.position.set(10, 15, 10);  // 提高光源高度

// 添加补光
const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
fillLight.position.set(-10, 5, 5);
scene.add(fillLight);