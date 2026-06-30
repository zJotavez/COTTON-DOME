<?php
/**
 * Cotton Dome LDA - Database Fix & Sync Script
 */

require_once __DIR__ . '/config.php';

try {
    echo "<h3>A inicializar correcao da Base de Dados...</h3>";

    // 1. Update site_settings email to suporte@domme.pt
    $stmt1 = $pdo->prepare("UPDATE site_settings SET email = 'suporte@domme.pt' WHERE id = 1 OR email LIKE '%[Inserir%'");
    $stmt1->execute();
    echo "<p>[OK] E-mail atualizado na tabela site_settings.</p>";

    // Update main service images to premium assets
    $pdo->query("UPDATE services SET image = 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80' WHERE id = 1");
    $pdo->query("UPDATE services SET image = 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80' WHERE id = 2");
    $pdo->query("UPDATE services SET image = 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1200&q=80' WHERE id = 3");
    echo "<p>[OK] Imagens dos serviços principais CCTV, Alarmes e Controlo de Acessos atualizadas.</p>";

    // 2. Check if gallery_images column exists in service_pages, if not add it
    $q = $pdo->query("SHOW COLUMNS FROM service_pages LIKE 'gallery_images'");
    $columnExists = $q->fetch();

    if (!$columnExists) {
        $pdo->query("ALTER TABLE service_pages ADD COLUMN gallery_images TEXT DEFAULT NULL");
        echo "<p>[OK] Coluna 'gallery_images' adicionada a tabela service_pages.</p>";
    } else {
        echo "<p>[INFO] A coluna 'gallery_images' ja existe na tabela service_pages.</p>";
    }

    // 3. Seed/Update default gallery images for all services
    $defaultImages = [
        1 => '["images/cctv-1.png","images/cctv-2.png","images/cctv-3.png"]',
        2 => '["images/alarme-intrusao-1.png","images/alarme-intrusao-2.png","images/alarme-intrusao-3.png"]',
        3 => '["images/controlo-acessos-1.png","images/controlo-acessos-2.png","images/controlo-acessos-3.png"]',
        4 => '["images/deteccao-incendio-1.png","images/deteccao-incendio-2.png","images/deteccao-incendio-3.png"]',
        5 => '["images/automatismos-1.png","images/automatismos-2.png","images/automatismos-3.png"]',
        6 => '["images/portas-portoes-1.png","images/portas-portoes-2.png","images/portas-portoes-3.png"]',
        7 => '["images/ups-1.png","images/ups-2.png","images/ups-3.png"]',
        8 => '["https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1590486803833-ffc6de08d6f9?auto=format&fit=crop&w=600&q=80"]',
        9 => '["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=600&q=80"]',
        10 => '["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"]'
    ];

    foreach ($defaultImages as $serviceId => $imagesJson) {
        // Check if page details exist for service
        $check = $pdo->prepare("SELECT id FROM service_pages WHERE service_id = :service_id LIMIT 1");
        $check->execute(['service_id' => $serviceId]);
        $row = $check->fetch();

        if ($row) {
            // Force synchronize/update all gallery images to ensure correct paths
            $up = $pdo->prepare("UPDATE service_pages SET gallery_images = :images WHERE id = :id");
            $up->execute(['images' => $imagesJson, 'id' => $row['id']]);
            echo "<p>[OK] Imagens da galeria sincronizadas para o servico ID {$serviceId}.</p>";
        }
    }

    echo "<h3>[SUCESSO] Base de dados reparada com sucesso!</h3>";
    echo "<p>Por favor, recarregue a pagina do seu site agora.</p>";

} catch (Exception $e) {
    echo "<h3>[ERRO] Ocorreu uma falha ao reparar a base de dados:</h3>";
    echo "<pre>" . htmlspecialchars($e->getMessage()) . "</pre>";
}
